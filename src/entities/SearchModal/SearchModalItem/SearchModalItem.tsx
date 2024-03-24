import Image from "next/image"
import { SearchMovieDtoV14 } from "@/models/Api"
import Link from "next/link"
import { paths } from "@/helpers/routing"
import { getTitleName } from "@/helpers/getTitleName"
import { MovieRating } from "@/shared/MovieRating/MovieRating"
import { getRating } from "@/helpers/getRating"

interface SearchModalItemProps {
    item: SearchMovieDtoV14
}

const SearchModalItem = ({ item }: SearchModalItemProps) => {
    const { poster, name, id, year, rating } = item

    return (
        <li key={id} className="search-modal__item search-item">
            <Link className="search-item__link" href={paths.movie(id)}>
                <div className="search-item__image">
                    {poster?.url && (
                        <Image
                            alt={getTitleName(name)}
                            fill
                            quality={100}
                            sizes="100%"
                            src={poster.url}
                        />
                    )}
                </div>
                <div className="search-item__content">
                    <h3 className="search-item__name">{getTitleName(name)}</h3>
                    <div className="search-item__actions">
                        <span className="search-item__year">{year}</span>
                        <MovieRating className="search-item__rating" size="small">
                            {getRating(rating)}
                        </MovieRating>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default SearchModalItem
