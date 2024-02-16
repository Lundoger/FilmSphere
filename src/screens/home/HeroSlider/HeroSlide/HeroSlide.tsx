import Link from 'next/link'
import Image from 'next/image'
import { MovieDtoV14 } from '@/models/Api'
import { paths } from '@/helpers/routing'
import { MovieRating } from '@/shared/MovieRating/MovieRating'

interface HeroSlideProps {
	item: MovieDtoV14
}

const HeroSlide = ({item}: HeroSlideProps) => {
	const {id, name, genres, rating, year, backdrop} = item

	return (
		<Link className='hero-slider__slide hero-slide' href={paths.movie(id)}>
			{backdrop?.url && (
				<Image
					className='hero-slide__image'
					alt={name ?? ''}
					fill
					priority
					quality={100}	
					sizes="100%"
					src={backdrop.url}
				/>
			)}
			<div className="hero-slide__content">
				<h3 className="hero-slide__name">{name}</h3>
				{genres && (
					<ul className="hero-slide__genres genres-hero">
						Жанры: 
						{genres.map((genre, i) => (
							<li key={i} className="genres-hero__genre">{genre.name}</li>
						))}
					</ul>
				)}
				<div className="hero-slide__actions">
					<MovieRating
						size='medium'
						className='hero-slide__rating'
					>
						{rating?.imdb?.toFixed(1)}
					</MovieRating>
					<span className="hero-slide__year">{year}</span>
				</div>
			</div>
		</Link>
	)
}

export default HeroSlide