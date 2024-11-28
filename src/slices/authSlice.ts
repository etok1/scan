import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface EventFiltersInfo {
  usedCompanyCount: number;
  companyLimit: number;
}

interface AuthProps {
  isAuthenticated: boolean;
  accessToken: string | null;
  expire: string | null;
  userData: EventFiltersInfo | null;
  loading: boolean | null;
  error: string | null;
}

interface AuthResponse {
  accessToken: string;
  expire: string;
}

interface Credentials {
  login: string;
  password: string;
}

const initialState: AuthProps = {
  isAuthenticated: false,
  accessToken: null,
  expire: null,
  userData: null,
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk<AuthResponse, Credentials>(
  "auth/fetchUserData",
  async ({ login, password }, { rejectWithValue }) => {
    const credentials: Credentials = { login, password };

    try {
      const response = await fetch(
        `https://gateway.scan-interfax.ru/api/v1/account/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json-patch+json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Login failed");
      }

      const jsonData: AuthResponse = await response.json();
      return jsonData;
    } catch (error: any) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const response = await fetch(
        `https://gateway.scan-interfax.ru/api/v1/account/info`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Login failed");
      }

      const data = await response.json();
      return data;
    } catch {
      return rejectWithValue("Network error");
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.userData = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.userData = action.payload.eventFiltersInfo;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.error.message || null;
        localStorage.removeItem("token");
      });
  },
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
