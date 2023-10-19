import { IMeta } from "@/types";
import { apiSlice } from "../apiSlice";
import { tagTypes } from "@/redux/tag-types";

const serviceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/service",
          method: "GET",
          params: arg,
        };
      },

      providesTags: [tagTypes.service],
    }),
  }),
});

// Define the type for the response data

export const { useGetAllServiceQuery } = serviceApiSlice;
