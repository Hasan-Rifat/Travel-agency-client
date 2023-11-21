import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ISearch {
  search: Object;
}

// Define the initial state using that type
const initialState: ISearch = {
  search: {},
};

export const search = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeSearch: (state, action) => {
      state.search = action.payload;
    },
    removeSearch: (state) => {
      state.search = {};
    },
  },
});

export const { storeSearch, removeSearch } = search.actions;

// Other code such as selectors can use the imported `RootState` type

export default search.reducer;
