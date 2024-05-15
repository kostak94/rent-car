import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../config/carsApi";

const limit = 12;

export const getCarsThunk = createAsyncThunk(
  "fetch/cars",
  async (page, thunkApi) => {
    try {
      const { data } = await carsApi.get(`advert?limit=${limit}&page=${page}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
