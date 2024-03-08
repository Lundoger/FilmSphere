import { useState } from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import type SwiperClass from "swiper"
import { FreeMode } from "swiper"
import clsx from "clsx"
import { items } from "./config/config"
import FilterSectionItem from "./ui/FilterSectionItem/FilterSectionItem"

const FilterSection = () => {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [isCenter, setIsCenter] = useState<boolean>(false)

    const slideChange = (swiper: SwiperClass) => {
        setIsStart(swiper.isEnd)
        setIsCenter(!swiper.isEnd && swiper.activeIndex > 0)
    }

    return (
        <section
            className={clsx("filter-section", {
                "filter-section--start": isStart,
                "filter-section--center": isCenter,
            })}
        >
            <div className="filter-section__container">
                <Swiper
                    className="filter-section__slider"
                    style={{ overflow: "visible" }}
                    freeMode
                    modules={[FreeMode]}
                    onSlideChange={slideChange}
                    onSliderMove={slideChange}
                    slidesPerView="auto"
                >
                    {items.map((item, i) => (
                        <SwiperSlide
                            key={i}
                            style={{ width: "auto" }}
                            className="filter-section__swiper-slide"
                        >
                            <FilterSectionItem item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default FilterSection
