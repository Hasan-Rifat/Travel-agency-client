import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import sideBarSlice from "./slice/sideBarSlice";
import userSlice from "./api/user/userSlice";
import searchSlice from "./slice/searchSlice";
import orderSlice from "./slice/orderSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    user: userSlice,
    search: searchSlice,
    order: orderSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const initialState = async () => {
  await store.dispatch(
    apiSlice.endpoints.refreshToken.initiate(
      {},
      {
        forceRefetch: true,
      }
    )
  );

  await store.dispatch(
    apiSlice.endpoints.getMe.initiate(
      {},
      {
        forceRefetch: true,
      }
    )
  );
};

// initialState();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
