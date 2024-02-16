import { useAppSelector } from '@/hooks/useAppSelector'
import Link from 'next/link'
import { getDirector } from './lib/getDirector'
import { getActors } from './lib/getActors'
import { paths } from '@/helpers/routing'

const Info = () => {
	const { movie } = useAppSelector(state => state.movieReducer)

	const items = [
		{ label: 'Режиссёр', content: getDirector(movie?.persons),},
		{ label: 'Актеры', content: getActors(movie?.persons)},
	]

	return (
		<div className="movie-hero__info">
			{items.map(({label, content}) => (
				<div key={label} className="movie-hero__row">
					<span className="movie-hero__label">{label}:</span>
					{Array.isArray(content) ? (
						<ul className="movie-hero__list list-movie-hero">
							{content.map((item) => (
								<li key={item.id} className="list-movie-hero__item item-movie-hero-list">
									<Link href={paths.person(item.id)}>{item.name ?? 'Нет информации'}</Link>
								</li>
							))}
						</ul>
					) : (
						<span className='description'>{content}</span>
					)}
				</div>
			))}
		</div>
	)
}

export default Info