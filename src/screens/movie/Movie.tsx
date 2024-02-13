import { useRouter } from 'next/router'
import React from 'react'

const Movie = () => {
	const {
		push,
		query: { id },
	} = useRouter();

	return (
		<div>Movie {id}</div>
	)
}

export default Movie