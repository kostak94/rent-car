import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./operations";

const initialState = {
  cars: [],
};

const slice = createSlice({
  name: " cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCarsThunk.fulfilled, (state, { payload }) => {
      //   console.log(payload);
      state.cars = payload;
    });
  },
});

export const carsReducer = slice.reducer;
