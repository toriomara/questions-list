import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  }),
  endpoints: () => ({}),
  tagTypes: ["Question", "Questions", "Skills", "Directions"],
});
