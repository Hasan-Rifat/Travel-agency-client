import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  open: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  open: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showSidebarDrawer: (state) => {
      state.open = true;
    },
    onSidebarClose: (state) => {
      state.open = false;
    },
  },
});

export const { onSidebarClose, showSidebarDrawer } = sideBarSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default sideBarSlice.reducer;
