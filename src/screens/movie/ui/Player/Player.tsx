import { useAppSelector } from "@/hooks/useAppSelector"
import Spinner from "@/shared/Spinner/Spinner"
import clsx from "clsx"
import { useState } from "react"

const Player = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const movie = useAppSelector(state => state.movieReducer.movie)

    if (!movie?.id) return null
    return (
        <section id="player" className="main__player player">
            <div className="player__container">
                {isLoading && (
                    <div className="player__loader">
                        <Spinner />
                    </div>
                )}
                <iframe
                    allow="autoplay"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                    className={clsx("player__iframe", !isLoading && "player__iframe--loaded")}
                    src={`https://api.linktodo.ws/embed/kp/${movie.id}?host=kinobd.net`}
                />
            </div>
        </section>
    )
}

export default Player
