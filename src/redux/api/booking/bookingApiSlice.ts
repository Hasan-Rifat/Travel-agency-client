import { IBook, IMeta, IOrder } from "@/types";
import { apiSlice } from "../apiSlice";
import { tagTypes } from "@/redux/tag-types";

const bookingServiceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: `/booking`,
        method: "POST",
        body,
      }),
    }),
    confirmOrder: builder.mutation({
      query: (body) => ({
        url: `/booking/${body.id}`,
        method: "PATCH",
        body: body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {},
    }),
  }),
});

// Define the type for the response data

export const { useCreateOrderMutation, useConfirmOrderMutation } =
  bookingServiceApiSlice;
