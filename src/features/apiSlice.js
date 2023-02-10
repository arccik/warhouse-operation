import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = process.env.NEXT_PUBLIC_API;

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["UserEntry", "RowData", "Product"],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({}),
});
