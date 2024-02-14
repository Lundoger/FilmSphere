import { useAppSelector } from '@/hooks/useAppSelector'
import Link from 'next/link'
import React from 'react'
import { getDirector } from './lib/getDirector'
import { getActors } from './lib/getActors'
import { paths } from '@/helpers/routing'

const Info = () => {
	const { movie } = useAppSelector(state => state.movieReducer)

	const items = [
		{ label: 'Режиссёр', list: getDirector(movie?.persons)},
		{ label: 'Актеры', list: getActors(movie?.persons)},
	]

	return (
		<div className="movie-hero__info">
			{items.map(({label, list}) => (
				<div key={label} className="movie-hero__row">
					<span className="movie-hero__label">{label}:</span>
					{Array.isArray(list) ? (
						<ul className="movie-hero__list list-movie-hero">
							{list.map((item) => (
								<li key={item.id} className="list-movie-hero__item item-movie-hero-list">
									<Link href={paths.person(item.id)}>{item.name ?? 'Нет информации'}</Link>
								</li>
							))}
						</ul>
					) : (
						<span className='description'>{list}</span>
					)}
				</div>
			))}
		</div>
	)
}

export default Info