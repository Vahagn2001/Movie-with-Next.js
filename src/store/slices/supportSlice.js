import { createSlice } from "@reduxjs/toolkit";

export const supportSlice = createSlice({
  name: "supportSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openSupport: (state) => {
      state.isOpen = true;
    },
    closeSupport: (state) => {
      state.isOpen = false;
    },
  },
  selectors: {
    getIsOpen: (state) => state.isOpen,
  },
});

export const { getIsOpen } = supportSlice.selectors;
export const { closeSupport, openSupport } = supportSlice.actions;

export default supportSlice.reducer;
