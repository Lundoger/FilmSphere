import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";

const AnimeSlider = () => {
	const { animeData } = useAppSelector(state => state.categoryReducer)

	return (
		<Category
			title="Аниме"
			href={paths.catalog({ genre: "аниме" })}
			data={animeData}
		/>
	)
}

export default AnimeSlider;
