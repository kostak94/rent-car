import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    brand: "",
    price: 0,
    mileageFrom: null,
    mileageTo: null,
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
