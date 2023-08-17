import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProduct } from "./productsApi";
const initialState = {
  products: [],
  isLoading: false,
  postSuccess: false,
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  // const response = await fetch("http://localhost:5000/products");
  // const data = await response.json();
  // console.log(data);
  // return data.data;
  const products = fetchProducts();
  return products;
});
export const addProduct = createAsyncThunk("product/postProduct", async (data) => {
  // const response = await fetch("http://localhost:5000/products");
  // const data = await response.json();
  // console.log(data);
  // return data.data;
  const product = postProduct(data);
  return product;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  //   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })

      .addCase(addProduct.pending, (state, action) => {
        state.isLoading = true;
        state.postSuccess = false;
        state.isError = false;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.postSuccess = true;
        state.isLoading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.products = [];
        state.isLoading = false;
        state.postSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
    // builder.addCase(getProducts.fulfilled, (state, action) => {
    //   state.isLoading = true;
    //   state.isError = false;
    // });
  },
});

export default productsSlice.reducer;
