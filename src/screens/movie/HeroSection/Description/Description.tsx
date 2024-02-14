import { useAppSelector } from '@/hooks/useAppSelector'
import React from 'react'

const Description = () => {
	const { movie } = useAppSelector(state => state.movieReducer)

	const tmpDesc = movie?.description ? movie?.description : 'Описание отсутсвует :-(╥_╥)'
	const shortDescription = tmpDesc.length > 150 ? tmpDesc.slice(0, 150) + '...' : tmpDesc
	const description = movie?.shortDescription ?? shortDescription
  
	return <p className="movie-hero__desc">{description}</p>
}

export default Description