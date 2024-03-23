import { paths } from "@/helpers/routing"
import Category from "@/widgets/Category/Category"
import { useGetGenreTitleQuery } from "@/api/filmSphereApi"

const RomanceSlider = () => {
    const { data, isError, isFetching } = useGetGenreTitleQuery({ limit: 10, genre: "мелодрама" })

    return (
        <Category
            title="Романтика"
            href={paths.catalog({ genre: "мелодрама" })}
            data={data?.docs}
            isLoading={isFetching}
            isError={isError}
        />
    )
}

export default RomanceSlider
