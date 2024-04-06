import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
    SearchMovieResponseDtoV14,
    MovieDocsResponseDtoV14,
    MovieDtoV14,
    Person,
} from "@/models/Api"

interface getSearchTitleParams {
    query: string
    page: number
    limit: number
}

interface getRecommendTitleParams {
    ratingValue?: number
    year?: number
    limit: number
}

interface getTitlesParams extends getRecommendTitleParams {
    genre?: string
    type?: string
    sortField?: string
}

export const filmSphereApi = createApi({
    reducerPath: "filmSphereApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.kinopoisk.dev/",
    }),
    endpoints: build => ({
        getSearchTitle: build.query<SearchMovieResponseDtoV14, getSearchTitleParams>({
            query: ({ query, page, limit }) => ({
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
        getGenreTitle: build.query<MovieDocsResponseDtoV14, getTitlesParams>({
            query: ({
                limit,
                genre,
                type,
                ratingValue = "6-10",
                year = "2000-2024",
                sortField = "votes.imdb",
            }) => ({
                url: "v1.4/movie?notNullFields=name&notNullFields=poster.url&notNullFields=year",
                method: "GET",
                headers: {
                    accept: "application/json",
                    "X-API-KEY": process.env.API_KEY,
                },
                params: {
                    ["rating.imdb"]: ratingValue,
                    ["genres.name"]: genre,
                    type: type,
                    sortField: sortField,
                    sortType: -1,
                    year: year,
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
                    "X-API-KEY": process.env.API_KEY,
                },
            }),
        }),
        getPersonById: build.query<Person, string | string[] | undefined>({
            query: (id: string) => ({
                url: `v1.4/person/${id}`,
                method: "GET",
                headers: {
                    accept: "application/json",
                    "X-API-KEY": process.env.API_KEY,
                },
            }),
        }),
        // getTitles: build.query<MovieDocsResponseDtoV14, getTitlesParams>({
        //     query: ({ limit, genre = null, ratingValue = "7-10", year = "2020-2024" }) => ({
        //         url: "v1.4/movie?notNullFields=name&notNullFields=poster.url&notNullFields=year",
        //         method: "GET",
        //         headers: {
        //             accept: "application/json",
        //             "X-API-KEY": process.env.API_KEY,
        //         },
        //         params: {
        //             ["rating.imdb"]: ratingValue,
        //             ["genres.name"]: genre,
        //             sortField: "votes.imdb",
        //             sortType: -1,
        //             year: year,
        //             limit: limit,
        //         },
        //     }),
        // }),
    }),
})

export const {
    useGetSearchTitleQuery,
    useLazyGetSearchTitleQuery,
    useGetMovieByIdQuery,
    useLazyGetMovieByIdQuery,
    useGetGenreTitleQuery,
    useGetPersonByIdQuery,
} = filmSphereApi
