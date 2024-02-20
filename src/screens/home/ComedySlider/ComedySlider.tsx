import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";

const ComedySlider = () => {
  const { data, isLoading } = useGetGenreTitleQuery({
    limit: 10,
    genre: "комедия",
  });

  return (
    <Category
      title="Комедия"
      href={paths.catalog({ genre: "комедия" })}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default ComedySlider;
