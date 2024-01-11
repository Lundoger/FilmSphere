import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const filmSphereApi = createApi({
	reducerPath: 'filmSphereApi',
	baseQuery: fetchBaseQuery({
		baseUrl: ''
	}),
	endpoints: build => ({
		fetchComic: build.query<any, any>({
			query: (id: number) => ({
				url: `comics/${id}`,
				params: {
				}
			}),
			// transformResponse: (response: ServerComicResponse) =>  response.data.results[0]
		}),
	})
})

export const {useLazyFetchComicQuery} = filmSphereApi