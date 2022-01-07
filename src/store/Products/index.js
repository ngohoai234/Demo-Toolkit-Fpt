import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./actionsProducts";

const initialState = {
  data: [],
  loading: false,
  error: null,
  selectedProduct: null,
};
// products/
// products/test
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    test(state, payload) {
      console.log("Home");
      // state -> redux -> shallow quality check -> ===
      // true -> state cũ
      // state
      // immer.js
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
      state.error = "Lỗi server";
    },
    [fetchProductById.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.selectedProduct = payload;
    },
    [fetchProductById.rejected]: (state) => {
      state.loading = false;
      state.error = "Lỗi server";
    },
  },
});

export const productsAct = productsSlice.actions;
console.log(productsSlice.actions.test());
export default productsSlice;
