import { IOrder } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

interface OrderState {
  order: IOrder;
}

// Define the initial state using that type
const initialState: OrderState = {
  order: {
    serviceId: "",
    userId: "",
    status: "",
    start: "",
    end: "",
    travelers: 0,
    specialRequests: "",
    price: "",
    totalDays: 0,
  },
};

export const order = createSlice({
  name: "order",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    bookOrder: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
    },

    removeOrder: (state) => {
      state.order = {
        serviceId: "",
        userId: "",
        status: "",
        start: "",
        end: "",
        travelers: 0,
        specialRequests: "",
        price: "",
        totalDays: 0,
      };
    },
  },
});

export const { removeOrder, bookOrder } = order.actions;

// Other code such as selectors can use the imported `RootState` type

export default order.reducer;
