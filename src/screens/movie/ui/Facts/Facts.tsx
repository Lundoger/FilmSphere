import { useAppSelector } from "@/hooks/useAppSelector"
import clsx from "clsx"
import FactItem from "./ui/FactItem"

const Facts = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    if (!movie?.facts.length) return null

    return (
        <section className="movie-facts">
            <div className="movie-facts__container">
                <h2 className="movie-facts__title title">Знаете ли вы что...</h2>
                <ul className="movie-facts__list">
                    {movie.facts.map((fact, i) => (
                        <FactItem key={i} fact={fact} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Facts
