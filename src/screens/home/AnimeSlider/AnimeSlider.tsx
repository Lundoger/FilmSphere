import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useActions } from "@/hooks/useActions";
import { useEffect } from "react";

const AnimeSlider = () => {
	const { setAnimeData } = useActions()
	const { data, isLoading } = useGetGenreTitleQuery({
		limit: 10,
		genre: "аниме",
	})

	useEffect(() => {
		if(data) setAnimeData(data)
	},[data])

	return (
		<Category
			title="Аниме"
			href={paths.catalog({ genre: "аниме" })}
			data={data}
		/>
	)
}

export default AnimeSlider;
