import { useGetMovieByIdQuery } from '@/api/filmSphereApi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Movie = () => {
	const {
		push,
		query: {id},
	} = useRouter()

	const {data, isLoading, isError} = useGetMovieByIdQuery(id)

	const {

	} = data.

	return (
		<section className="movie-hero">
			<div className="movie-hero__container">
				
			</div>
		</section>
	)
}

export default Movie