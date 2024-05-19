import clsx from "clsx"
import { useEffect, useRef } from "react"
import { usePagination } from "./lib/usePagination"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/shared/Button/Button"

interface PaginationProps {
  total: number
  page: number
  className?: string
  onChange: (page: number) => void
}

export const Pagination = ({ total, page, onChange }: PaginationProps) => {
  const rangeRef = useRef<HTMLButtonElement>(null)

  const { active, next, previous, range, setPage } = usePagination({
    total,
    page,
    onChange,
    siblings: 2,
  })

  useEffect(() => {
    rangeRef.current?.scrollIntoView({
      inline: "center",
    })

    window.scrollTo(0, 0)
  }, [page])

  if (total < 2) return null

  return (
    <div className="catalog__pagination pagination-catalog">
      <Button
        className="pagination-catalog__navigation pagination-catalog__navigation--prev"
        disabled={page === 1}
        onClick={previous}
        endIcon={<ChevronLeft size={24} />}
        rounded
        size="small"
      />
      <div className="pagination-catalog__range">
        {range.map((item, idx) => {
          const isNumberItem = item !== "dots"
          const isActive = active === item

          return isNumberItem ? (
            <Button
              className={clsx(
                "pagination-catalog__item",
                isActive && "pagination-catalog__item--active"
              )}
              disabled={item === page}
              key={idx}
              onClick={() => setPage(item)}
              ref={isActive ? rangeRef : undefined}
              rounded
              size="small"
            >
              {item}
            </Button>
          ) : (
            <span className="pagination-catalog__dots" key={idx}>
              •••
            </span>
          )
        })}
      </div>
      <Button
        className="pagination-catalog__navigation pagination-catalog__navigation--next"
        disabled={page === total}
        onClick={next}
        rounded
        size="small"
        endIcon={<ChevronLeft size={24} />}
      />
    </div>
  )
}
