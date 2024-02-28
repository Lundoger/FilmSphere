import { paths } from "@/helpers/routing";
import Category from "@/widgets/Category/Category";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useActions } from "@/hooks/useActions";
import { getCategoryData } from "../../lib/dataResponse";

const AdventureSlider = () => {
	const { setAdventureData } = useActions()
	const { adventureData } = useAppSelector(state => state.categoryReducer)

	const {isLoading, isError} = getCategoryData({
		genre:'приключения', 
		action: setAdventureData
	})

    return <Category 
				title='Приключения' 
				href={paths.catalog({ genre: "приключения", sort: "year", })} 
				data={adventureData}
				isLoading={isLoading}
				isError={isError}
			/>
}

export default AdventureSlider;
