import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const FantasySlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({
        limit: 10,
        genre: "фэнтези",
        type: "movie",
        ratingValue: "6-10",
        year: "2000-2024",
    })

    return (
        <Category
            title="Фэнтези"
            href={paths.movieCatalog({ genre: "фэнтези", sortField: "year", type: "movie" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default FantasySlider
