import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const CartoonsSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, genre: "мультфильм" })

    return (
        <Category
            title="Мультфильмы"
            href={paths.catalog({ genre: "мультфильм" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default CartoonsSlider
