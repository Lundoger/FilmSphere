import { useAppSelector } from "@/hooks/useAppSelector"
import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply"
import React from "react"
import { FreeMode } from "swiper"
import PersonItem from "./ui/PersonItem/PersonItem"

const Persons = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    if (!movie?.persons?.length) return null

    return (
        <section className="movie-persons">
            <div className="movie-persons__container">
                <h2 className="movie-persons__title title">Актеры</h2>
                <CarouselMultiply
                    className="movie-persons__swiper"
                    items={movie?.persons}
                    slideClassName="movie-persons__swiper-slide"
                    freeMode={{ momentumBounceRatio: 0 }}
                    modules={[FreeMode]}
                    navigation={false}
                    renderItem={(item, i) => <PersonItem key={i} item={item} />}
                />
            </div>
        </section>
    )
}

export default Persons
