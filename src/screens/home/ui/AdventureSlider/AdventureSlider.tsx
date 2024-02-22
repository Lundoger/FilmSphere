import { paths } from "@/helpers/routing";
import Category from "@/widgets/Category/Category";
import { useAppSelector } from "@/hooks/useAppSelector";

const AdventureSlider = () => {
	const { adventureData } = useAppSelector(state => state.categoryReducer)

    return <Category 
				title='Приключения' 
				href={paths.catalog({ genre: "приключения", sort: "year", })} 
				data={adventureData}
			/>
}

export default AdventureSlider;
