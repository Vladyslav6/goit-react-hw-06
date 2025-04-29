import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./newContactSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    item: contactSlice,
    filter: filtersReducer,
  },
});
