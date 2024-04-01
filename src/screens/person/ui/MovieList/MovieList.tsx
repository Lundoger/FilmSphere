import MovieItem from "@/entities/MovieItem/MovieItem"
import { useAppSelector } from "@/hooks/useAppSelector"
import { Button } from "@/shared/Button/Button"
import { useState } from "react"

const MAX_MOVIES = 20

const MovieList = () => {
    const person = useAppSelector(state => state.personReducer.person)
    const [allMovies, setAllMovies] = useState<boolean>(false)

    if (!person?.movies) return null

    const filteredMovies = person.movies.filter(movie => movie.rating)
    const movieToShow = allMovies ? filteredMovies : filteredMovies.slice(0, MAX_MOVIES)

    return (
        <section className="person-movie-list">
            <div className="person-movie-list__container">
                <h2 className="person-movie-list__title title">Фильмография</h2>
                <div className="person-movie-list__grid">
                    {movieToShow.map(({ rating, ...movie }) => (
                        <MovieItem
                            item={movie}
                            rating={rating}
                            className="person-movie-list__item"
                        />
                    ))}
                </div>
                {MAX_MOVIES < filteredMovies.length && (
                    <Button
                        onClick={() => setAllMovies(prev => !prev)}
                        className="person-movie-list__load-more"
                        rounded
                    >
                        <span>{allMovies ? "Скрыть" : "Показать все"}</span>
                    </Button>
                )}
            </div>
        </section>
    )
}

export default MovieList
