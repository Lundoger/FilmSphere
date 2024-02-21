import { getRating } from '@/helpers/getRating'
import { getSeasonsLength } from '@/helpers/getSeasonsLength'
import { getTitleName } from '@/helpers/getTitleName'
import { minutesToHour } from '@/helpers/minutesToHour'
import { paths } from '@/helpers/routing'
import { MovieDtoV14 } from '@/models/Api'
import { MovieRating } from '@/shared/MovieRating/MovieRating'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface MovieItemProps {
	item: MovieDtoV14,
	className?: string,
}

const MovieItem = ({item, className}: MovieItemProps) => {
	const rating = getRating(item.rating)
	const name = getTitleName(item.name)

	const length = item?.seasonsInfo?.length
		? getSeasonsLength(item?.seasonsInfo.length)
		: minutesToHour(item?.movieLength ?? 0)
		
	const filteredLength = length !== '0' ? null : length

	const items = [
		item?.year,
		filteredLength,
	]

	return (
		<Link 
			className={clsx('title-item', className)}
			href={paths.movie(item.id)}
		>
			{item.poster?.url && (
				<div className="title-item__bg">
					<Image
						alt={item?.name ?? 'Нет названия (ಥ_ಥ)'}
						className="title-item__bg-img"
						fill
						quality={100}
						sizes="100%"
						src={item.poster?.url}
					/>
				</div>
			)}
			<div className="title-item__content">
				<MovieRating className='title-item__rating'>{rating}</MovieRating>
				<div className="title-item__info">
					<h3 className="title-item__name">{name}</h3>
					<div className="title-item__row">
						{items.filter(Boolean).map((item, i) => (
							<span key={i} className="title-item__label">{item}</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default MovieItem