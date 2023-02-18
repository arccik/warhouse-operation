import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedRow: null };

const counterSlice = createSlice({
  name: "mainTable",
  initialState,
  reducers: {
    setRowId(state, action) {
      state.selectedRow = action.payload;
    },
  },
});

export const selectAllRows = (state) => state.selectedRow;
export const { setRowId } = counterSlice.actions;
export default counterSlice;
