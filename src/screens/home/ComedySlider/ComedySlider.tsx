import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useEffect } from "react";
import { useActions } from "@/hooks/useActions";

const ComedySlider = () => {
	const { setComedyData } = useActions()
	const { data, isLoading } = useGetGenreTitleQuery({
		limit: 10,
		genre: "комедия",
	})

	useEffect(() => {
		if(data) setComedyData(data)
	},[data])

	return (
		<Category
			title="Комедия"
			href={paths.catalog({ genre: "комедия" })}
			data={data}
		/>
	)
}

export default ComedySlider;
