import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import { paths } from "@/helpers/routing";
import { useActions } from "@/hooks/useActions";
import Category from "@/widgets/Category/Category";
import { useEffect } from "react";

const ComedySlider = () => {
	const { setRomanceData } = useActions()
	const { data, isLoading } = useGetGenreTitleQuery({
		limit: 10,
		genre: "мелодрама",
	})

	useEffect(() => {
		if(data) setRomanceData(data)
	},[data])

    return (
		<Category
			title="Романтика"
			href={paths.catalog({ genre: "мелодрама" })}
			data={data}
		/>
    )
}

export default ComedySlider
