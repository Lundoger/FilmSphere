import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";

const FantasySlider = () => {
	const { fantasyData } = useAppSelector(state => state.categoryReducer)

	return (
		<Category
			title="Фэнтези"
			href={paths.catalog({ genre: "фэнтези" })}
			data={fantasyData}
		/>
	)
}

export default FantasySlider;
