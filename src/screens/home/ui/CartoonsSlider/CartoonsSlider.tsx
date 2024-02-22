import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";

const CartoonsSlider = () => {
	const { cartoonData } = useAppSelector(state => state.categoryReducer)

	return (
		<Category
			title="Мультфильмы"
			href={paths.catalog({ genre: "мультфильм" })}
			data={cartoonData}
		/>
	)
}

export default CartoonsSlider;
