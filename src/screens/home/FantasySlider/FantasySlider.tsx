import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";

const FantasySlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    })

    return (
		<></>
    )
}

export default FantasySlider;
