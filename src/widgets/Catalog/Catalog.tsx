import { useLazyGetGenreTitleQuery } from "@/api/filmSphereApi"
import MovieItem from "@/entities/MovieItem/MovieItem"
import Spinner from "@/shared/Spinner/Spinner"
import clsx from "clsx"
import { useRouter } from "next/router"
import { paramsToObject } from "./lib/paramsToObject"
import { Button } from "@/shared/Button/Button"
import { Pagination } from "./ui/Pagination/Pagination"
import { usePageChange } from "./ui/Pagination/lib/usePageChange"
import { useEffect } from "react"

interface CatalogProps {
  title: string
  className?: string
  type?: string
}

const Catalog = ({ title, className, type }: CatalogProps) => {
  const { query, push } = useRouter()
  const params = paramsToObject(
    query.genre as string,
    query.year as string,
    query.sortField as string
  )
  const page = Number(query.page ?? 1)
  const [fetchGenreTitle, { data, isFetching, isError }] = useLazyGetGenreTitleQuery()

  useEffect(() => {
    fetchGenreTitle({
      ...params,
      type,
      page,
      limit: 40,
    })
  }, [page])

  const onChange = (page: number) => {
    push({ query: { ...query, page } })
  }

  return (
    <section className={clsx("catalog", className)}>
      <div className="catalog__container">
        <h1 className="catalog__title">{title}</h1>
        {/* <div className="catalog__filters">
          <Button>Фильтры</Button>
          <span>сортировать по: (select)</span>
        </div> */}
        {isFetching && (
          <div className="loader--container">
            <Spinner />
          </div>
        )}
        {isError && <p className="title--error">Упс.. Что-то пошло не так (⌣̩̩́_⌣̩̩̀)</p>}
        {data && !isFetching && (
          <div className="catalog__movies-list">
            {data?.docs.map((item, i) => (
              <MovieItem className="catalog__movies-item" key={i} item={item} />
            ))}
          </div>
        )}
        {data && <Pagination onChange={onChange} page={page} total={data?.pages} />}
      </div>
    </section>
  )
}

export default Catalog
