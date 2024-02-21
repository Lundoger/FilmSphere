import { paths } from "@/helpers/routing";
import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";
import { useEffect } from "react";
import { useActions } from "@/hooks/useActions";

const AdventureSlider = () => {
	const { setAdventureData } = useActions()
    const { data, isLoading } = useGetGenreTitleQuery({
        limit: 10,
		genre: 'приключения'
    })

	useEffect(() => {
		if(data) setAdventureData(data)
	},[data])

    return <Category 
				title='Приключения' 
				href={paths.catalog({ genre: "приключения", sort: "year", })} 
				data={data}
			/>
}

export default AdventureSlider;
