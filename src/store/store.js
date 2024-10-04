import { configureStore } from "@reduxjs/toolkit";
import supportSlice from "./slices/supportSlice";

export default configureStore({
  reducer: {
    supportSlice,
  },
});
