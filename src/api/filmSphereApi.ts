import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchMovieResponseDtoV14, MovieDocsResponseDtoV14, MovieDtoV14 } from "@/models/Api";

interface getSearchTitleParams {
	query: string;
	page: number;
	limit: number;
}

interface getRecommendTitleParams {
	ratingValue?: number;
	year?: number;
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
		getRecommendTitle: build.query<MovieDocsResponseDtoV14, getRecommendTitleParams>({
			query: ({ limit, ratingValue = '7-10', year = 2023}) => ({
				url: "v1.4/movie?notNullFields=name&notNullFields=backdrop.url&notNullFields=rating.imdb&notNullFields=year",
				method: "GET",
				headers: {
					accept: "application/json",
					'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
				},
				params: {
					['rating.imdb']: ratingValue,
					year: year,
					sortField: 'votes.filmCritics',	
					sortType: -1,
					limit: limit,
				},
			}),
		}),
		getMovieById: build.query<MovieDtoV14, string | string[] | undefined>({
			query: (id: string) => ({
				url: `v1.4/movie/${id}`,
				method: "GET",
				headers: {
					accept: "application/json",
					'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
				},
			}),
		}),
	}),
})

export const { 
	useGetSearchTitleQuery, 
	useLazyGetSearchTitleQuery,
	useGetRecommendTitleQuery,
	useGetMovieByIdQuery,
	useLazyGetMovieByIdQuery 
} = filmSphereApi
