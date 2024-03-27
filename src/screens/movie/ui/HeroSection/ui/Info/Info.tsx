import { getRating } from "@/helpers/getRating"
import { getSeasonsLength } from "@/helpers/getSeasonsLength"
import { minutesToHour } from "@/helpers/minutesToHour"
import { useAppSelector } from "@/hooks/useAppSelector"
import { MovieRating } from "@/shared/MovieRating/MovieRating"

const Info = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    const length = movie?.seasonsInfo?.length
        ? getSeasonsLength(movie?.seasonsInfo.length)
        : minutesToHour(movie?.movieLength ?? 0)

    const items = [
        movie?.year,
        movie?.countries ? movie?.countries[movie?.countries.length - 1].name : null,
        movie?.ageRating ? `${movie.ageRating}+` : null,
        movie?.genres ? movie.genres[0].name : null,
        length,
    ]

    return (
        <div className="movie-hero__info">
            <MovieRating size="medium" showState={true} className="movie-hero__rating">
                {getRating(movie?.rating)}
            </MovieRating>
            {items.filter(Boolean).map((item, i) => (
                <span key={i} className="movie-hero__info-item">
                    {item}
                </span>
            ))}
        </div>
    )
}

export default Info
