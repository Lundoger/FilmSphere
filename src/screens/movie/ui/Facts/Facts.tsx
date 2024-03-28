import { useAppSelector } from "@/hooks/useAppSelector"
import FactItem from "./ui/FactItem"
import { useState } from "react"
import { Button } from "@/shared/Button/Button"

const MAX_FACTS = 5

const Facts = () => {
    const { movie } = useAppSelector(state => state.movieReducer)
    const [isAllFacts, setIsAllFacts] = useState<boolean>(false)

    if (!movie?.facts || !movie?.facts.length) return null

    const factsToShow = isAllFacts ? movie.facts : movie.facts.slice(0, MAX_FACTS)

    return (
        <section className="movie-facts">
            <div className="movie-facts__container">
                <h2 className="movie-facts__title title">Знаете ли вы что...</h2>
                <ul className="movie-facts__list">
                    {factsToShow.map((fact, i) => (
                        <FactItem key={i} fact={fact} />
                    ))}
                </ul>
                {MAX_FACTS < movie.facts.length && (
                    <Button
                        onClick={() => setIsAllFacts(prev => !prev)}
                        className="movie-facts__load-more"
                        rounded
                    >
                        <span>{isAllFacts ? "Скрыть" : "Показать все"}</span>
                    </Button>
                )}
            </div>
        </section>
    )
}

export default Facts
