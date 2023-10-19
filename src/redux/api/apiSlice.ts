import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { authKey, userKey } from "@/constants/storageKey";
import { getUser } from "./user/userSlice";

const accessToken = getFromLocalStorage(authKey);

export const apiSlice = createApi({
  reducerPath: "api",
  // baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken!,
    },
  }),

  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
        credentials: "include",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const result = await queryFulfilled;

          setToLocalStorage(userKey, result.data.data.token);
          dispatch(getUser(result.data.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    refreshToken: builder.query({
      query: () => ({
        url: "/auth/refresh-token",
        method: "GET",
      }),
    }),
  }),
  tagTypes: tagTypesList,
});
/*  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",getBaseUrl() 
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken!,
    },
  }), */
