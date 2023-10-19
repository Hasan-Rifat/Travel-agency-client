import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  password: string;
  public_id: string;
  role: string;
  updatedAt: string;
  url: string;
};

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
