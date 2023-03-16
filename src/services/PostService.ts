import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../store/models/IPost";
export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: { _limit: limit },
      }),
    }),
  }),
});
