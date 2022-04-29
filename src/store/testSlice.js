import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test:""
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    test(state, action) {
      state.test = action.payload;
    },
  },
});

export const { test } = testSlice.actions;
export default testSlice.reducer;
