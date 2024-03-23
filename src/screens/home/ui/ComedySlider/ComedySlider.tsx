import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const ComedySlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, genre: "комедия" })

    if (!data?.docs) return null

    return (
        <Category
            title="Комедия"
            href={paths.catalog({ genre: "комедия" })}
            data={data.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default ComedySlider
