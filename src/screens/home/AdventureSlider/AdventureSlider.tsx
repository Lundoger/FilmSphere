import { paths } from "@/helpers/routing";
import { useGetGenreTitleQuery } from "@/api/filmSphereApi";
import Category from "@/widgets/Category/Category";

const AdventureSlider = () => {
    const { data, isLoading } = useGetGenreTitleQuery({
        limit: 10,
		genre: 'приключения'
    })

    return <Category 
				title='Приключения' 
				href={paths.catalog({ genre: "приключения", sort: "year", })} 
				data={data}
				isLoading={isLoading}
			/>
}

export default AdventureSlider;
