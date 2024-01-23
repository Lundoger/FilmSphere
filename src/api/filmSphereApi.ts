import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {} from "src/models/IMovie";

export const filmSphereApi = createApi({
  reducerPath: "filmSphereApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/",
  }),
  endpoints: (build) => ({
    getByName: build.query<any, any>({
      query: (query: string, page: number = 1, limit: number = 20) => ({
        url: "v1.4/movie/search",
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": process.env.API_KEY,
        },
        params: {
          page: page,
          limit: limit,
          query: query,
        },
      }),
    }),
  }),
});

export const { useGetByNameQuery, useLazyGetByNameQuery } = filmSphereApi;
