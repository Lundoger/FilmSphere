import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IServerDatesResponse, IServerResponse } from "src/models/IMovie";

export const filmSphereApi = createApi({
  reducerPath: "filmSphereApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/",
  }),
  endpoints: (build) => ({
    fetchNowPlaying: build.query<IServerDatesResponse, number>({
      query: (page: number) => ({
        url: "3/movie/now_playing",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2UzYWRjNjQwNmIyZDViMmMyYWFiMDk3ZDUzYWQzMCIsInN1YiI6IjY0YWU1MzVhM2UyZWM4MDE0ZjRhNjJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xKfIgCNldFGWOwb-ee_imClQFf9RhlOtY09vqWqrv8o",
        },
        params: {
          language: "en-US",
          page: page,
        },
      }),
      // transformResponse: (response: ServerComicResponse) =>  response.data.results[0]
    }),

    fetchPopular: build.query<IServerResponse, number>({
      query: (page: number) => ({
        url: "3/movie/popular",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2UzYWRjNjQwNmIyZDViMmMyYWFiMDk3ZDUzYWQzMCIsInN1YiI6IjY0YWU1MzVhM2UyZWM4MDE0ZjRhNjJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xKfIgCNldFGWOwb-ee_imClQFf9RhlOtY09vqWqrv8o",
        },
        params: {
          language: "en-US",
          page: page,
        },
      }),
      // transformResponse: (response: ServerComicResponse) =>  response.data.results[0]
    }),

    fetchTopRated: build.query<IServerResponse, number>({
      query: (page: number) => ({
        url: "3/movie/top_rated",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2UzYWRjNjQwNmIyZDViMmMyYWFiMDk3ZDUzYWQzMCIsInN1YiI6IjY0YWU1MzVhM2UyZWM4MDE0ZjRhNjJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xKfIgCNldFGWOwb-ee_imClQFf9RhlOtY09vqWqrv8o",
        },
        params: {
          language: "en-US",
          page: page,
        },
      }),
      // transformResponse: (response: ServerComicResponse) =>  response.data.results[0]
    }),

    fetchUpComing: build.query<IServerDatesResponse, number>({
      query: (page: number) => ({
        url: "3/movie/upcoming",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2UzYWRjNjQwNmIyZDViMmMyYWFiMDk3ZDUzYWQzMCIsInN1YiI6IjY0YWU1MzVhM2UyZWM4MDE0ZjRhNjJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xKfIgCNldFGWOwb-ee_imClQFf9RhlOtY09vqWqrv8o",
        },
        params: {
          language: "en-US",
          page: page,
        },
      }),
      // transformResponse: (response: ServerComicResponse) =>  response.data.results[0]
    }),
  }),
});

export const {
  useFetchNowPlayingQuery,
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchUpComingQuery,
} = filmSphereApi;
