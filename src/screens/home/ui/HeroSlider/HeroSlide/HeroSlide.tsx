import Link from 'next/link'
import Image from 'next/image'
import { MovieDtoV14 } from '@/models/Api'
import { paths } from '@/helpers/routing'
import { MovieRating } from '@/shared/MovieRating/MovieRating'

type HeroSlide = {
	id: number,
	year: number,
	rating: string,
	title: string,
	genres: string[],
	image: string,
}

interface HeroSlideProps {
	item: HeroSlide
}

const HeroSlide = ({item}: HeroSlideProps) => {
	const {id, title, genres, rating, year, image} = item

	return (
		<Link className='hero-slider__slide hero-slide' href={paths.movie(id)}>
			<Image
				className='hero-slide__image'
				alt={title}
				fill
				priority
				quality={100}	
				sizes="100%"
				src={image}
			/>
			<div className="hero-slide__content">
				<h3 className="hero-slide__name">{title}</h3>
				{genres && (
					<ul className="hero-slide__genres genres-hero">
						Жанры: 
						{genres.map((genre, i) => (
							<li key={i} className="genres-hero__genre">{genre}</li>
						))}
					</ul>
				)}
				<div className="hero-slide__actions">
					<MovieRating
						size='medium'
						className='hero-slide__rating'
					>
						{rating}
					</MovieRating>
					<span className="hero-slide__year">{year}</span>
				</div>
			</div>
		</Link>
	)
}

export default HeroSlide