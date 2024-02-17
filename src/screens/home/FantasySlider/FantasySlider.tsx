import { CarouselMultiply } from "@/shared/CarouselMultiply/CarouselMultiply";
import { paths } from "@/helpers/routing";
import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const FantasySlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    });

    return (
        <section className="category-section">
            <div className="category-section__container">
                <Link
                    href={paths.catalog({ genre: "фэнтези" })}
                    className="category-section__title"
                >
                    Фэнтези
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
                            initialSlide: 1,
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

export default FantasySlider;
