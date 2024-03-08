import { useAppSelector } from "@/hooks/useAppSelector"
import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply"
import React from "react"
import { FreeMode } from "swiper"
import PersonItem from "./ui/PersonItem/PersonItem"

const Persons = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    return (
        <>
            {movie?.persons && (
                <section className="movie-persons">
                    <div className="movie-persons__container">
                        <h2 className="movie-persons__title title">Актеры</h2>
                        <CarouselMultiply
                            className="movie-persons__swiper"
                            items={movie.persons}
                            slideClassName="movie-persons__swiper-slide"
                            freeMode={{ momentumBounceRatio: 0 }}
                            modules={[FreeMode]}
                            renderItem={item => <PersonItem item={item} />}
                        />
                    </div>
                </section>
            )}
        </>
    )
}

export default Persons
