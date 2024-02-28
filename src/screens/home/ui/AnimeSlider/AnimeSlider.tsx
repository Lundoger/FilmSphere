import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useActions } from "@/hooks/useActions";
import { getCategoryData } from "../../lib/dataResponse";

const AnimeSlider = () => {
	const { setAnimeData } = useActions()
	const { animeData } = useAppSelector(state => state.categoryReducer)

	const {isLoading, isError} = getCategoryData({
		genre:'аниме', 
		action: setAnimeData
	})

	return (
		<Category
			title="Аниме"
			href={paths.catalog({ genre: "аниме" })}
			data={animeData}
			isLoading={isLoading}
			isError={isError}
		/>
	)
}

export default AnimeSlider;
