import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply";
import { paths } from "@/helpers/routing";
import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CartoonsSlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    });

    return (
        <section className="category-section">
            <div className="category-section__container">
                <Link href={paths.cartoons} className="category-section__title">
                    Мультфильмы
                    <span className="category-section__icon">
                        <ChevronRight />
                    </span>
                </Link>
                {data && !isLoading && !isError && (
                    <CarouselMultiply
                        className="category-section__swiper"
                        items={data.docs}
                        options={{
                            loop: false,
                            initialSlide: 0,
                        }}
                        renderItem={(item) => {
                            console.log(item);
                            return <div key={item.id}>Films</div>;
                        }}
                    />
                )}
            </div>
        </section>
    );
};

export default CartoonsSlider;
