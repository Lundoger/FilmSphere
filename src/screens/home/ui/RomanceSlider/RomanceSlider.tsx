import { paths } from "@/helpers/routing";
import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import Category from "@/widgets/Category/Category";
import { getCategoryData } from "../../lib/dataResponse";

const RomanceSlider = () => {
	const { setRomanceData } = useActions()
	const { romanceData } = useAppSelector(state => state.categoryReducer)

	const {isLoading, isError} = getCategoryData({
		genre:'мелодрама', 
		action: setRomanceData
	})

    return (
		<Category
			title="Романтика"
			href={paths.catalog({ genre: "мелодрама" })}
			data={romanceData}
			isLoading={isLoading}
			isError={isError}
		/>
    )
}

export default RomanceSlider
