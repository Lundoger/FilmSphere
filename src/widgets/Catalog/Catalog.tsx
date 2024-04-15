import { useGetGenreTitleQuery } from "@/api/filmSphereApi"
import MovieItem from "@/entities/MovieItem/MovieItem"
import Spinner from "@/shared/Spinner/Spinner"
import clsx from "clsx"
import { useRouter } from "next/router"
import { paramsToObject } from "./lib/paramsToObject"
import { Button } from "@/shared/Button/Button"

interface CatalogProps {
    title: string
    className?: string
    type?: string
}

const Catalog = ({ title, className, type }: CatalogProps) => {
    const { query } = useRouter()
    const params = paramsToObject(
        query.genre as string,
        query.year as string,
        query.sortField as string
    )
    const { data, isLoading, isError } = useGetGenreTitleQuery({ ...params, type, limit: 40 })

    return (
        <section className={clsx("catalog", className)}>
            <div className="catalog__container">
                <h1 className="catalog__title">{title}</h1>
                <div className="catalog__filters">
                    <Button>Фильтры</Button>
                    <span>сортировать по: (select)</span>
                </div>
                {isLoading && !data && (
                    <div className="loader--container">
                        <Spinner />
                    </div>
                )}
                {isError && <p className="title--error">Упс.. Что-то пошло не так (⌣̩̩́_⌣̩̩̀)</p>}
                {data && (
                    <div className="catalog__movies-list">
                        {data?.docs.map((item, i) => (
                            <MovieItem className="catalog__movies-item" key={i} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Catalog
