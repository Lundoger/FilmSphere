import { paths } from "@/helpers/routing"
import Category from "@/widgets/Category/Category"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const AdventureSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, genre: "приключения" })

    return (
        <Category
            title="Приключения"
            href={paths.catalog({ genre: "приключения", sort: "year" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default AdventureSlider
