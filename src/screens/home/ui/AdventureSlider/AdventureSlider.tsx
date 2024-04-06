import { paths } from "@/helpers/routing"
import Category from "@/widgets/Category/Category"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const AdventureSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({
        limit: 10,
        genre: "приключения",
        ratingValue: 6 - 10,
        year: 2000 - 2024,
        type: "movie",
    })

    return (
        <Category
            title="Приключения"
            href={paths.movieCatalog({ genre: "приключения", sortField: "year", type: "movie" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default AdventureSlider
