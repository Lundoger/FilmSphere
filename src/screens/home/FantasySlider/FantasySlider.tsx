import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { paths } from "@/helpers/routing";
import { useEffect } from "react";
import { useActions } from "@/hooks/useActions";

const FantasySlider = () => {
	const { setFantasyData } = useActions()
	const { data, isLoading } = useGetGenreTitleQuery({
		limit: 10,
		genre: "фэнтези",
	})

	useEffect(() => {
		if(data) setFantasyData(data)
	},[data])

	return (
		<Category
			title="Фэнтези"
			href={paths.catalog({ genre: "фэнтези" })}
			data={data}
		/>
	)
}

export default FantasySlider;
