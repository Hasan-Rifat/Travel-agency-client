import { apiSlice } from "../apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          console.log(arg);
          const result = await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          console.log(arg);
          const result = await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

// Define the type for the response data

export const { useLoginMutation, useRegisterMutation } = userApiSlice;
