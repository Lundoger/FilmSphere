import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";

const CartoonsSlider = () => {
  const { data, isLoading } = useGetGenreTitleQuery({
    limit: 10,
    genre: "мультфильм",
  });

  return (
    <Category
      title="Мультфильмы"
      href={paths.catalog({ genre: "мультфильм" })}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default CartoonsSlider;
