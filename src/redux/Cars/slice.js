import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./operations";

const initialState = {
  cars: [],
  limit: 12,
  isLoading: false,
  isError: null,
  page: 1,
  isAllFetched: false,
  isInitialized: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        // There is no possible to check totalPages or totalCount of payload
        if (payload.length === 0) {
          state.isAllFetched = true;
          return;
        }
        if (payload.length < 12) {
          state.isAllFetched = true;
        }
        state.isInitialized = true;
        state.isLoading = false;
        state.cars = [...state.cars, ...payload];
      });
  },
});
export const carsActions = slice.actions;
export const carsReducer = slice.reducer;
