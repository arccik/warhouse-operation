import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import mainTable from "./AppState/tableSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    mainTable: mainTable.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(apiSlice.middleware),
});
