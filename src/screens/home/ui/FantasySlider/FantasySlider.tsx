import Category from "@/widgets/Category/Category"
import { paths } from "@/helpers/routing"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const FantasySlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, genre: "фэнтези" })

    return (
        <Category
            title="Фэнтези"
            href={paths.catalog({ genre: "фэнтези" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default FantasySlider
