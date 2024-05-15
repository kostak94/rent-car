import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const index = state.favorites.findIndex((car) => {
        return car.id === payload.id;
      });
      if (index !== -1) {
        state.favorites = state.favorites.filter((car) => {
          return car.id !== payload.id;
        });
      } else {
        state.favorites = [...state.favorites, payload];
      }
    },
  },
});

export const favoritesReducer = slice.reducer;
export const { toggleFavorites } = slice.actions;
