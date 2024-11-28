import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

interface ParamState {
  intervalType: string;
  issueDateInterval: { from: number | null; to: number | null };
  histogramTypes: string[];
  searchContext: object;
  similarMode: string;
  limit: number | null;
  sortType: string;
  sortDirectionType: string;
  attributeFilters: object;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ParamState = {
  intervalType: "month",
  histogramTypes: ["totalDocuments", "riskFactors"],
  issueDateInterval: { from: null, to: null },
  searchContext: {
    targetSearchEntitiesContext: "",
  },
  similarMode: "duplicates",
  limit: null,
  sortType: "issueDate",
  sortDirectionType: "asc",
  attributeFilters: {
    excludeTechNews: false,
    excludeAnnouncements: true,
    excludeDigests: false,
  },
  status: "idle",
  error: null,
};

export const fetchParameters = createAsyncThunk(
  "param/fetchParameters",
  async (
    requestBody: {
      intervalType: string;
      issueDateInterval: { from: number | null; to: number | null };
      histogramTypes: string[];
      searchContext: object;
      similarMode: string;
      limit: number | null;
      sortType: string;
      sortDirectionType: string;
      attributeFilters: object;
    },
    { rejectWithValue }
  ) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/parameters",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );
    } catch (errorL: any) {
      return rejectWithValue(errorL.message);
    }
  }
);

const ParamSlice = createSlice({
  name: "param",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParameters.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchParameters.fulfilled, (state, action) => {
        state.status = "succeeded";
        Object.assign(state, action.payload);
      })
      .addCase(fetchParameters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectError = (state: { param: ParamState }) => state.param.error;

export const selectStatus = (state: { param: ParamState }) =>
  state.param.status;

export default ParamSlice.reducer;
