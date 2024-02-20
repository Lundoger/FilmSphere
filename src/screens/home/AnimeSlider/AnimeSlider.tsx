import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";

const AnimeSlider = () => {
  const { data, isLoading } = useGetGenreTitleQuery({
    limit: 10,
    genre: "аниме",
  });

  return (
    <Category
      title="Аниме"
      href={paths.catalog({ genre: "аниме" })}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default AnimeSlider;
