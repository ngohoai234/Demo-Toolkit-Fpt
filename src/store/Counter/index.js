import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
//
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //   increment
    increment(state, action) {
      state.value++;
    },
    decrement(state, action) {
      state.value--;
    },
  },
});

export const counterActions = counterSlice.actions;

// export const GET_USERS = "GET_USERS"
export default counterSlice;

// action creator function -> action object
