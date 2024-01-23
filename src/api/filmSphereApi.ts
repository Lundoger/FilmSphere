import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {SearchMovies } from "@/models/Api";

export const filmSphereApi = createApi({
	reducerPath: "filmSphereApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.kinopoisk.dev/",
	}),
	endpoints: (build) => ({
		getSearchTitle: build.query<SearchMovies, string>({
			query: (query: string, page: number = 1, limit: number = 20) => ({
				url: "v1.2/movie/search",
				method: "GET",
				headers: {
					accept: "application/json",
					'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
				},
				params: {
					page: page,
					limit: limit,
					query: query,
				},
			}),
		}),
	}),
})

export const { useGetSearchTitleQuery, useLazyGetSearchTitleQuery } = filmSphereApi
