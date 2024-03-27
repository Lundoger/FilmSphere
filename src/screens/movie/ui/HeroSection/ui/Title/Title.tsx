import { getTitleName } from "@/helpers/getTitleName"
import { useAppSelector } from "@/hooks/useAppSelector"
import Image from "next/image"

const Title = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    return (
        <div className="movie-hero__logo">
            {movie?.logo?.url ? (
                <Image
                    alt={movie?.name ?? "Без названия"}
                    fill
                    quality={100}
                    sizes="100%"
                    src={movie.logo.url}
                />
            ) : (
                <span>{getTitleName(movie?.name)}</span>
            )}
        </div>
    )
}

export default Title
