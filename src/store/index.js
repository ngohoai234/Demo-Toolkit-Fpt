import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import productsSlice from "./Products";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    products: productsSlice.reducer,
  },
});
