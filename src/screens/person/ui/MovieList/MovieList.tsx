import MovieItem from "@/entities/MovieItem/MovieItem"
import { useAppSelector } from "@/hooks/useAppSelector"
import { Button } from "@/shared/Button/Button"
import { useState } from "react"

const MovieList = () => {
    const person = useAppSelector(state => state.personReducer.person)
    const [maxMovies, setMaxMovies] = useState<number>(20)

    if (!person?.movies) return null

    const filteredMovies = person?.movies?.filter(movie => movie.rating)

    const hasMore = filteredMovies.length > maxMovies

    const movieToShow = filteredMovies.slice(0, maxMovies)

    return (
        <section className="person-movie-list">
            <div className="person-movie-list__container">
                <h2 className="person-movie-list__title title">Фильмография</h2>
                <div className="person-movie-list__grid">
                    {movieToShow.map(({ rating, ...movie }, i) => (
                        <MovieItem
                            key={i}
                            item={movie}
                            rating={rating}
                            className="person-movie-list__item"
                        />
                    ))}
                </div>
                {hasMore && (
                    <Button
                        onClick={() => setMaxMovies(prev => prev + 20)}
                        className="person-movie-list__load-more"
                        rounded
                    >
                        <span>Показать ёще</span>
                    </Button>
                )}
            </div>
        </section>
    )
}

export default MovieList
