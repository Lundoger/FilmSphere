import { useAppSelector } from "@/hooks/useAppSelector"

const Facts = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    if (!movie?.facts.length) return null

    return (
        <section className="movie-facts">
            <div className="movie-facts__container">
                <h2 className="movie-facts__title title">Знаете ли вы что...</h2>
                <ul className="movie-facts__list">
                    {movie.facts.map((fact, i) => (
                        <li
                            key={i}
                            className="movie-facts__item item-movie-facts"
                            dangerouslySetInnerHTML={{ __html: fact.value ?? "" }}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Facts
