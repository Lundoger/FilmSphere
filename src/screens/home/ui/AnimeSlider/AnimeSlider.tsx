import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const AnimeSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, genre: "аниме" })

    return (
        <Category
            title="Аниме"
            href={paths.catalog({ genre: "аниме" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default AnimeSlider
