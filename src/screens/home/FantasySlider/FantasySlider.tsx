import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";

const FantasySlider = () => {
  const { data, isLoading } = useGetGenreTitleQuery({
    limit: 10,
    genre: "фэнтези",
  });

  return (
    <Category
      title="Фэнтези"
      href={paths.catalog({ genre: "фэнтези" })}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default FantasySlider;
