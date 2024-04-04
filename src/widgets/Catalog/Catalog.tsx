import { useGetGenreTitleQuery } from "@/api/filmSphereApi"
import MovieItem from "@/entities/MovieItem/MovieItem"
import Spinner from "@/shared/Spinner/Spinner"
import clsx from "clsx"
import { useRouter } from "next/router"

interface CatalogProps {
    title: string
    className?: string
}

const Catalog = ({ title, className }: CatalogProps) => {
    const { query } = useRouter()
    const params = query.genre

    const { data, isLoading } = useGetGenreTitleQuery({
        limit: 30,
    })

    return (
        <section className={clsx("catalog", className)}>
            <div className="catalog__container">
                <h1 className="catalog__title">{title}</h1>
                <div className="catalog__row">
                    {isLoading && !data && <Spinner />}
                    {data && (
                        <div className="catalog__movies-list">
                            {data?.docs.map((item, i) => (
                                <MovieItem className="catalog__movies-item" key={i} item={item} />
                            ))}
                        </div>
                    )}
                    <div className="catalog__filters"></div>
                </div>
            </div>
        </section>
    )
}

export default Catalog
