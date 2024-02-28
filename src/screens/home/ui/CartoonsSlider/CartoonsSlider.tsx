import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useActions } from "@/hooks/useActions";
import { getCategoryData } from "../../lib/dataResponse";

const CartoonsSlider = () => {
	const { setCartoonData } = useActions()
	const { cartoonData } = useAppSelector(state => state.categoryReducer)

	const {isLoading, isError} = getCategoryData({
		genre:'мультфильм', 
		action: setCartoonData
	})

	return (
		<Category
			title="Мультфильмы"
			href={paths.catalog({ genre: "мультфильм" })}
			data={cartoonData}
			isLoading={isLoading}
			isError={isError}
		/>
	)
}

export default CartoonsSlider;
