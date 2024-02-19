import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply";
import { paths } from "@/helpers/routing";
import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FreeMode, Navigation } from "swiper";

const AdventureSlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    })

    return (
        <section className="category-section">
            <div className="category-section__container">
                <Link
                    href={paths.catalog({ genre: "приключения", sort: "year" })}
                    className="category-section__title"
                >
                    Приключения
                    <span className="category-section__icon">
                        <ChevronRight />
                    </span>
                </Link>
                {data && !isLoading && !isError && (
                    <CarouselMultiply
                        className="category-section__swiper"
                        items={data.docs}
						slideClassName="category-section__swiper-slide"
						freeMode={{ momentumBounceRatio: 0 }}
                        modules={[FreeMode, Navigation]}
                        renderItem={(item) => <div className="category-section__slide" key={item.id}>Films</div>}
                    />
                )}
            </div>
        </section>
    );
};

export default AdventureSlider;
