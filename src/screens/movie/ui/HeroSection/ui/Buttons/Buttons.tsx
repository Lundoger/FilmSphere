import { useActions } from "@/hooks/useActions"
import { Button } from "@/shared/Button/Button"
import { Bookmark, MonitorPlay, PlayCircle, Share2, Star } from "lucide-react"
import React from "react"

const Buttons = () => {
    const { trailerModalToggle, shareModalToggle } = useActions()

    const scrollToPlayer = () => {
        const player = document.getElementById("player")
        if (!player) return null

        const playerYPosition = window.scrollY + player.getBoundingClientRect().top
        const scrollToPlayer = playerYPosition - (window.innerHeight - player.clientHeight) / 2

        window.scrollTo({
            top: scrollToPlayer,
            behavior: "smooth",
        })
    }

    return (
        <div className="movie-hero__actions">
            <Button
                className="movie-hero__actions-button"
                gradient
                rounded
                size="big"
                endIcon={<MonitorPlay />}
                onClick={scrollToPlayer}
            >
                Смотреть
            </Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--trailer"
                rounded
                variant="glass"
                endIcon={<PlayCircle />}
                onClick={() => trailerModalToggle(true)}
            >
                Трейлер
            </Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--save"
                rounded
                endIcon={<Bookmark />}
                variant="glass"
            ></Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--rating"
                rounded
                endIcon={<Star />}
                variant="glass"
            ></Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--share"
                rounded
                endIcon={<Share2 />}
                variant="glass"
                onClick={() => shareModalToggle(true)}
            ></Button>
        </div>
    )
}

export default Buttons
