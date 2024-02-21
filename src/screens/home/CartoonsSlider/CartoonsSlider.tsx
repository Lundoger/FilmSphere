import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useEffect } from "react";
import { useActions } from "@/hooks/useActions";

const CartoonsSlider = () => {
	const { setCartoonData } = useActions()
	const { data, isLoading } = useGetGenreTitleQuery({
		limit: 10,
		genre: "мультфильм",
	})

	useEffect(() => {
		if(data) setCartoonData(data)
	},[data])

	return (
		<Category
			title="Мультфильмы"
			href={paths.catalog({ genre: "мультфильм" })}
			data={data}
		/>
	)
}

export default CartoonsSlider;
