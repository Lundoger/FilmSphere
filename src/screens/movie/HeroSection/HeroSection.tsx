import Title from './Title/Title'
import Description from './Description/Description'
import Persons from './Persons/Persons'
import Info from './Info/Info'
import { useAppSelector } from '@/hooks/useAppSelector'
import { CSSProperties } from 'react'

const Hero = () => {
	const { movie } = useAppSelector(state => state.movieReducer)

	return (
		<section className="movie-hero">
			<div className="movie-hero__container">
				<div className="movie-hero__content">
					<Title/>
					<Info/>
					<Description/>
					<Persons/>
				</div>
			</div>
			{movie?.backdrop?.url && (
				<div 
					className="movie-hero__bg"
					style={
						{ background: `url(${movie.backdrop?.url}) center / cover no-repeat` } as CSSProperties
					}
				/>
			)}
		</section>
	)
}

export default Hero