import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";
import Category from "@/widgets/Category/Category";

const ComedySlider = () => {
	const { romanceData } = useAppSelector(state => state.categoryReducer)

    return (
		<Category
			title="Романтика"
			href={paths.catalog({ genre: "мелодрама" })}
			data={romanceData}
		/>
    )
}

export default ComedySlider
