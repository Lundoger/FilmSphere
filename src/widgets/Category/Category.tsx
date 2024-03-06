import MovieItem from "@/entities/MovieItem/MovieItem"
import { MovieDtoV14 } from "@/models/Api"
import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply"
import Spinner from "@/shared/Spinner/Spinner"
import clsx from "clsx"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { FreeMode, Navigation } from "swiper"

const Loader = () => {
    return (
        <div className="loader--container">
            <Spinner />
        </div>
    )
}

interface CategoryProps {
    href: string
    title: string
    data: MovieDtoV14[] | undefined
    isLoading: boolean
    isError: boolean
    className?: string
    containerClassName?: string
}

const Category = ({
    href,
    title,
    data,
    isError,
    isLoading,
    className,
    containerClassName,
}: CategoryProps) => {
    return (
        <section className={clsx("category-section", className)}>
            <div className={clsx("category-section__container", containerClassName)}>
                <Link href={href} className="category-section__title">
                    {title}
                    <span className="category-section__icon">
                        <ChevronRight />
                    </span>
                </Link>
                {isLoading && !isError && !data && <Loader />}
                {!isLoading && isError && <p>{"Something went wrong..."}</p>}
                {!isError && !isLoading && data && (
                    <CarouselMultiply
                        className="category-section__swiper"
                        items={data}
                        slideClassName="category-section__swiper-slide"
                        freeMode={{ momentumBounceRatio: 0 }}
                        modules={[FreeMode, Navigation]}
                        renderItem={item => <MovieItem item={item} />}
                    />
                )}
            </div>
        </section>
    )
}

export default Category
