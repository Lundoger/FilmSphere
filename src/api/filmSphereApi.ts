import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchMovieResponseDtoV14 } from "@/models/Api";

interface getSearchTitleParams {
	query: string;
	page: number;
	limit: number;
}

export const filmSphereApi = createApi({
	reducerPath: "filmSphereApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.kinopoisk.dev/",
	}),
	endpoints: (build) => ({
		getSearchTitle: build.query<SearchMovieResponseDtoV14, getSearchTitleParams>({
			query: ({ query, page, limit }) => ({
				url: "v1.4/movie/search",
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
