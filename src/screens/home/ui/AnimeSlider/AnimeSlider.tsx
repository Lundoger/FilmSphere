import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const AnimeSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, type: "anime" })

    return (
        <Category
            title="Аниме"
            href={paths.animeCatalog({ sortField: "year", type: "anime" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default AnimeSlider
