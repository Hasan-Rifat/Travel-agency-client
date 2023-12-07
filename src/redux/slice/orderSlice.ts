import { IOrder } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface OrderState {
  order: IOrder;
}

// Define the initial state using that type
const storedOrder =
  typeof location !== "undefined" ? getFromLocalStorage("orderKey") : "";

const initialState: OrderState = {
  order: storedOrder
    ? JSON.parse(storedOrder)
    : {
        serviceId: "",
        userId: "",
        status: "",
        start: "",
        end: "",
        travelers: 0,
        specialRequests: "",
        price: "",
        totalDays: 0,
        id: "",
      },
};

export const order = createSlice({
  name: "order",
  initialState,

  reducers: {
    bookOrder: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;

      typeof location !== "undefined"
        ? setToLocalStorage("orderKey", JSON.stringify(action.payload))
        : "";
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
        id: "",
      };

      if (typeof location !== "undefined") {
        localStorage.removeItem("orderKey");
      }
    },
  },
});

export const { removeOrder, bookOrder } = order.actions;

export default order.reducer;
