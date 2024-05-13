import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../config/carsApi";

export const getCarsThunk = createAsyncThunk(
  "fetch/cars",
  async (_, thunkApi) => {
    try {
      const { data } = await carsApi.get("advert");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
