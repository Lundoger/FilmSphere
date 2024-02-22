import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";

const ComedySlider = () => {
	const { comedyData } = useAppSelector(state => state.categoryReducer)

	return (
		<Category
			title="Комедия"
			href={paths.catalog({ genre: "комедия" })}
			data={comedyData}
		/>
	)
}

export default ComedySlider;
