import { useAppSelector } from "@/hooks/useAppSelector"

const Player = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    if (!movie?.id) return null
    return (
        <section id="player" className="main__player player">
            <div className="player__container">
                <iframe
                    allow="autoplay"
                    allowFullScreen
                    className="player__iframe"
                    src={`https://voidboost.net/embed/${movie.id}?poster=1&poster_id=4&df=1`}
                />
            </div>
        </section>
    )
}

export default Player
