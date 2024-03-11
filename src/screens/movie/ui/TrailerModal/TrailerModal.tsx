import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import Modal from "@/shared/Modal/Modal"
import Spinner from "@/shared/Spinner/Spinner"
import { useState } from "react"
import { getTrailer } from "./lib/getTrailer"

const TrailerModal = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { trailerModalToggle } = useActions()
    const { isTrailerModalOpen } = useAppSelector(state => state.toggleReducer)
    const { movie } = useAppSelector(state => state.movieReducer)
    const trailer = getTrailer(movie?.videos)

    return (
        <Modal
            className="movie-hero__trailer movie-trailer-modal"
            isOpen={isTrailerModalOpen}
            handleClose={() => trailerModalToggle(false)}
        >
            <div className="movie-trailer-modal__container">
                {isLoading && <Spinner />}
                {trailer ? (
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="movie-trailer-modal__iframe"
                        onLoad={() => setIsLoading(false)}
                        src={`${trailer?.url}?autoplay=1`}
                        title="Трейлер"
                    />
                ) : (
                    <p>К сожалению у нас нет трейлера к данному тайтлу (ಥ﹏ಥ)</p>
                )}
            </div>
        </Modal>
    )
}

export default TrailerModal
