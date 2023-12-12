import { apiSlice } from "../apiSlice";

const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (body) => ({
        url: `/review`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Define the type for the response data

export const { useCreateReviewMutation } = reviewApiSlice;
