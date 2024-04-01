import { getRating } from "@/helpers/getRating"
import { getTitleName } from "@/helpers/getTitleName"
import { minutesToHour } from "@/helpers/minutesToHour"
import { paths } from "@/helpers/routing"
import { LinkedMovieV14, MovieDtoV14, MovieInPerson, Rating } from "@/models/Api"
import { MovieRating } from "@/shared/MovieRating/MovieRating"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

interface MovieItemProps {
    item: MovieDtoV14 | LinkedMovieV14 | MovieInPerson
    rating?: number | null
    className?: string
}

const MovieItem = ({ item, className, rating }: MovieItemProps) => {
    const movieRating = Number(rating ?? getRating(item?.rating as Rating)).toFixed(1)
    const name = getTitleName(item.name)

    let imageSrc = `https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4097096.jpg`
    if ("poster" in item && item.poster?.url) imageSrc = item.poster?.url

    return (
        <Link className={clsx("title-item", className)} href={paths.movie(item.id)}>
            <div className="title-item__bg">
                <Image
                    alt={item?.name ?? "Нет названия (ಥ_ಥ)"}
                    className="title-item__bg-img"
                    fill
                    quality={100}
                    sizes="100%"
                    src={imageSrc}
                />
            </div>
            <div className="title-item__content">
                <MovieRating className="title-item__rating">{movieRating}</MovieRating>
                <div className="title-item__info">
                    <h3 className="title-item__name">{name}</h3>
                    <div className="title-item__row">
                        {"year" in item && item?.year && (
                            <span className="title-item__label">{item.year}</span>
                        )}
                        {"movieLength" in item && item?.movieLength && (
                            <span className="title-item__label">
                                {minutesToHour(item.movieLength)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieItem
