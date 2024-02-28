import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useActions } from "@/hooks/useActions";
import { getCategoryData } from "../../lib/dataResponse";

const ComedySlider = () => {
	const { setComedyData } = useActions()
	const { comedyData } = useAppSelector(state => state.categoryReducer)

	const {isLoading, isError} = getCategoryData({
		genre:'комедия', 
		action: setComedyData
	})

	return (
		<Category
			title="Комедия"
			href={paths.catalog({ genre: "комедия" })}
			data={comedyData}
			isLoading={isLoading}
			isError={isError}
		/>
	)
}

export default ComedySlider;
