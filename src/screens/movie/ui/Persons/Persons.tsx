import { useAppSelector } from "@/hooks/useAppSelector"
import React from "react"

const Persons = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    return (
        <section className="movie-persons">
            <div className="movie-persons__container">
                <h2 className="movie-persons__title">Актеры</h2>
            </div>
        </section>
    )
}

export default Persons
