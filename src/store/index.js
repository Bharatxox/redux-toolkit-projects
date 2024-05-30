import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlices";
import todoSlices from "../slices/todoSlices";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlices,
  },
});
