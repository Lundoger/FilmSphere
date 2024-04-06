import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const CartoonsSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, type: "cartoon" })

    return (
        <Category
            title="Мультфильмы"
            href={paths.cartoonCatalog({ type: "cartoon", sortField: "year" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default CartoonsSlider
