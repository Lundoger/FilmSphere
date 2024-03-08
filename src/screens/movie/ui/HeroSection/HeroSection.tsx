import { useAppSelector } from "@/hooks/useAppSelector"
import { CSSProperties } from "react"
import Title from "./ui/Title/Title"
import Info from "./ui/Info/Info"
import Description from "./ui/Description/Description"
import Persons from "./ui/Persons/Persons"
import Buttons from "./ui/Buttons/Buttons"

const Hero = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    return (
        <section className="movie-hero">
            <div className="movie-hero--height" />
            {movie?.backdrop?.url && (
                <div
                    className="movie-hero__bg"
                    style={{ backgroundImage: `url(${movie.backdrop?.url})` } as CSSProperties}
                />
            )}
            <div className="movie-hero__container">
                <div className="movie-hero__content">
                    <Title />
                    <Info />
                    <Description />
                    <Persons />
                    <Buttons />
                </div>
            </div>
        </section>
    )
}

export default Hero
