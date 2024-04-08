import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const ComedySlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({
        limit: 10,
        genre: "комедия",
        type: "movie",
        ratingValue: "7-10",
        year: "2016-2024",
    })

    return (
        <Category
            title="Комедия"
            href={paths.movieCatalog({ genre: "комедия", sortField: "year", type: "movie" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default ComedySlider
