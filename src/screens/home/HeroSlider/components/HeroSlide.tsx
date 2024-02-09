import Link from 'next/link'
import Image from 'next/image'
import { MovieDtoV14 } from '@/models/Api'

interface HeroSlideProps {
	item: MovieDtoV14
}

const HeroSlide = ({item}: HeroSlideProps) => {
	const {name, genres, rating, year, backdrop} = item

	return (
		<Link className='hero-slider__slide hero-slide' href={'#'}>
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
				<div className="hero-slide__actions">
					<span className="hero-slide__rating">{rating?.kp?.toFixed(1)}</span>
					<span className="hero-slide__year">{year}</span>
					<span className="hero-slide__genre">Romantic</span>
				</div>
			</div>
		</Link>
	)
}

export default HeroSlide