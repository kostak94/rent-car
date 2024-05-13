import axios from "axios";

export const carsApi = axios.create({
  baseURL: "https://63343a63433198e79dd3288b.mockapi.io/",
});
