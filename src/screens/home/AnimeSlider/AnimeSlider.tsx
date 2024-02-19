import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";

const AnimeSlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    })

    return (
		<></>
    )
}

export default AnimeSlider;
