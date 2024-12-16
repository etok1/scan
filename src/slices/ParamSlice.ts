import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface RequestBody {
  issueDateInterval: {
    startDate: string | null | number;
    endDate: string | null | number;
  };
  searchContext: {
    targetSearchEntitiesContext: {
      targetSearchEntities: Array<{
        type: string;
        sparkId: number | null;
        entityId: number | null;
        inn: string | number | null;
        maxFullness: boolean;
        inBusinessNews: boolean | null;
      }>;
      onlyMainRole: boolean;
      tonality: string;
      onlyWithRiskFactors: boolean;
      riskFactors: {
        and: Array<{ id: number }>;
        or: Array<{ id: number }>;
        not: Array<{ id: number }>;
      };
      themes: {
        and: Array<{ tonality: string; entityId: number }>;
        or: Array<{ tonality: string; entityId: number }>;
        not: Array<{ tonality: string; entityId: number }>;
      };
    };
    themesFilter: {
      and: Array<{ entityId: number }>;
      or: Array<{ entityId: number }>;
      not: Array<{ entityId: number }>;
    };
  };
  searchArea: {
    includedSources: Array<number>;
    excludedSources: Array<number>;
    includedSourceGroups: Array<number>;
    excludedSourceGroups: Array<number>;
  };
  attributeFilters: {
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;
  };
  similarMode: string;
  limit: number | null;
  sortType: string;
  sortDirectionType: string;
  intervalType: string;
  histogramTypes: string[];
}

interface ParamState {
  data: any | null;
  cards: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ParamState = { data:  JSON.parse(localStorage.getItem("data") || 'null'), cards: JSON.parse(localStorage.getItem("cards") || 'null'), status: "idle", error: null };



// const fetchCards = createAsyncThunk(
//   "param/fetchCards",
//   async (ids: string[], { rejectWithValue }) => {
//     const token = localStorage.getItem("token");


//     try {
//       const response = await fetch(
//         "https://gateway.scan-interfax.ru/api/v1/documents",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json-patch+json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ids}),
//         }
//       );
//       const data = await response.json();
//       console.log('data for cards:', data);
//       return data;
//     } catch (errorL: any) {
//       return rejectWithValue(errorL.message);
//     }
//   }
// ); 

export const fetchCards = createAsyncThunk(
  "param/fetchCards",
  async (requestBody: RequestBody, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/objectsearch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching IDs: ${response.statusText}`);
      }

      const data = await response.json();
      const dataIds = {
        "ids": data.items.map((item: any) => item.encodedId)
      };
      console.log('ids:', dataIds)

      const responseCards = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/documents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataIds),
        }
      );
      const dataCards = await responseCards.json();
      console.log('data for cards:', dataCards);
      console.log('dataCards:', dataCards)
      return dataCards;
    } catch (errorL: any) {
      return rejectWithValue(errorL.message);
    }
  }
);

export const fetchParameters = createAsyncThunk(
  "param/fetchParameters",
  async (requestBody: RequestBody, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );
      const data = await response.json();

      return data;
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
      .addCase(fetchParameters.pending, (state, action) => {
        console.log("Action Payload:", action.payload);
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchParameters.fulfilled, (state, action) => {
        console.log("Action Payload:", action.payload);
        state.status = "succeeded";
        state.data = action.payload;
        // localStorage.setItem('data', JSON.stringify(action.payload));
      })
      .addCase(fetchParameters.rejected, (state, action) => {
        console.log("Action Payload:", action.payload);
        state.status = "failed";
        state.error = action.payload as string;
      });
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectData = (state: RootState) => state.param.data;
export const selectCards = (state: RootState) => state.param.cards;

export default ParamSlice.reducer;
