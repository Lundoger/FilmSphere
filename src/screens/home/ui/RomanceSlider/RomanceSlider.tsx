import { paths } from "@/helpers/routing"
import Category from "@/widgets/Category/Category"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const RomanceSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({
        limit: 10,
        genre: "мелодрама",
        type: "movie",
        ratingValue: "6-10",
        year: "2000-2024",
    })

    return (
        <Category
            title="Романтика"
            href={paths.movieCatalog({ genre: "мелодрама", sortField: "year", type: "movie" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default RomanceSlider
