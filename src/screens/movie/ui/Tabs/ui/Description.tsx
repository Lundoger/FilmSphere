import { useAppSelector } from "@/hooks/useAppSelector"

const Description = () => {
    const { movie } = useAppSelector(state => state.movieReducer)

    return <p>{movie?.description ?? "Описание отсутсвует (╥_╥)"}</p>
}

export default Description
