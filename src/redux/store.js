import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Cars/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
