import { useAppSelector } from "@/hooks/useAppSelector"

const Description = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    return <p>{movie?.description ?? "Описание отсутсвует (╥_╥)"}</p>
}

export default Description
