import { useAppSelector } from "@/hooks/useAppSelector"
import Link from "next/link"
import { getDirector } from "./lib/getDirector"
import { getActors } from "./lib/getActors"
import { paths } from "@/helpers/routing"

const Persons = () => {
    const movie = useAppSelector(state => state.movieReducer.movie)

    const items = [
        { label: "Режиссёр", list: getDirector(movie?.persons ?? []) },
        { label: "В ролях", list: getActors(movie?.persons ?? []) },
    ]

    return (
        <>
            {movie?.persons ? (
                <div className="movie-hero__persons persons-movie-hero">
                    {items.map(({ label, list }) => (
                        <div className="persons-movie-hero__row">
                            <span className="persons-movie-hero__label">{label}:</span>
                            <ul className="persons-movie-hero__list">
                                {list.map(item => (
                                    <li key={item.id} className="persons-movie-hero__item">
                                        <Link href={paths.person(item.id)}>
                                            {item.name ?? item.enName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <span>Нет информации об участниках тайтла (ಥ﹏ಥ)</span>
            )}
        </>
    )
}

export default Persons
