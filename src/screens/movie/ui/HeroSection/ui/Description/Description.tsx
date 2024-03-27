import { useAppSelector } from "@/hooks/useAppSelector"
import React from "react"

const Description = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    const tmpDesc = movie?.description ? movie?.description : "Описание отсутсвует (╥_╥)"
    const shortDescription = tmpDesc.length > 100 ? tmpDesc.slice(0, 100) + "..." : tmpDesc
    const description = movie?.shortDescription ?? shortDescription

    return <p className="movie-hero__desc">{description}</p>
}

export default Description
