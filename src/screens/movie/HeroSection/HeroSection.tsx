import Title from './Title/Title'
import Description from './Description/Description'
import Persons from './Persons/Persons'
import Info from './Info/Info'
import { useAppSelector } from '@/hooks/useAppSelector'
import { CSSProperties } from 'react'
import Buttons from './Buttons/Buttons'

const Hero = () => {
	const { movie } = useAppSelector(state => state.movieReducer)

	return (
		<section className="movie-hero">
			{movie?.backdrop?.url && (
				<div 
					className="movie-hero__bg"
					style={
						{ backgroundImage: `url(${movie.backdrop?.url})` } as CSSProperties
					}
				/>
			)}
			<div className="movie-hero__container">
				<div className="movie-hero__content">
					<Title/>
					<Info/>
					<Description/>
					<Persons/>
					<Buttons/>
				</div>
			</div>
		</section>
	)
}

export default Hero