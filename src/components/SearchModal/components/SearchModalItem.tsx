import Image from 'next/image';
import { SearchMovieDtoV14 } from '@/models/Api';
import Link from 'next/link';

interface SearchModalItemProps {
	item: SearchMovieDtoV14,
}

const SearchModalItem = ({ item }: SearchModalItemProps) => {
	const {poster, name, id, year, rating} = item

	return (
		<li key={id} className="search-modal__item search-item">
			<Link className='search-item__link' href={`/`}>
				<div className="search-item__image">
					{poster?.url && (
						<Image
							alt={name ?? 'this title has no name*'}
							fill
							quality={100}
							sizes="100%"
							src={poster.url}
						/>
					)}
				</div>
				<div className="search-item__content">
					<h3 className="search-item__name">{name ? name : 'this title has no name*'}</h3>
					<div className="search-item__actions">
						<span className="search-item__year">{year}</span>
						<span className="search-item__rating">{rating?.imdb?.toFixed(1)}</span>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default SearchModalItem