import { configureStore } from '@reduxjs/toolkit';
import testSlice from "./slices.js";
export const store = configureStore({
  reducer: {
    testData:testSlice,
  },
})