import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: "/products" }),
      providesTags: ["Products"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useRemoveProductMutation } = productApi;
