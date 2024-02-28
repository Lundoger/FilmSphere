import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useActions } from "@/hooks/useActions";
import { getCategoryData } from "../../lib/dataResponse";

const FantasySlider = () => {
	const { setFantasyData } = useActions()
	const { fantasyData } = useAppSelector(state => state.categoryReducer)

	const {isLoading, isError} = getCategoryData({
		genre:'фэнтези', 
		action: setFantasyData
	})

	return (
		<Category
			title="Фэнтези"
			href={paths.catalog({ genre: "фэнтези" })}
			data={fantasyData}
			isLoading={isLoading}
			isError={isError}
		/>
	)
}

export default FantasySlider;
