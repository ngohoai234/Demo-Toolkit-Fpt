import { createAsyncThunk } from "@reduxjs/toolkit";

// thunk object creator -> 3 plain object creator -> pending  fulfilled reject
// disptach action pending

//
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (args, { rejectWithValue, dispatch, getState }) => {
    try {
      // async => promise
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // thành công -> data
      // data thành fulfi
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);
