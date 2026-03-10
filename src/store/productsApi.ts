// src/store/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
  }),
});

// RTK Query auto-generates this hook for you
export const { useGetProductsQuery } = productsApi;