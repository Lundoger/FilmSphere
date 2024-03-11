import MovieItem from "@/entities/MovieItem/MovieItem"
import { useAppSelector } from "@/hooks/useAppSelector"
import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply"
import React from "react"
import { FreeMode, Navigation } from "swiper"

const Similar = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    if (!movie?.similarMovies) return null

    return (
        <section className="movie-similar">
            <div className="movie-similar__container">
                <div className="movie-similar__title title">Похожее</div>
                <CarouselMultiply
                    className="movie-similar__swiper"
                    items={movie?.similarMovies}
                    slideClassName="movie-similar__swiper-slide category-section__swiper-slide"
                    freeMode={{ momentumBounceRatio: 0 }}
                    modules={[FreeMode, Navigation]}
                    renderItem={item => <MovieItem item={item} />}
                />
            </div>
        </section>
    )
}

export default Similar
