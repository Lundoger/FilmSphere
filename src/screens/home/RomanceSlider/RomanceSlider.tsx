import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";

const ComedySlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    })

    return (
		<></>
    )
}

export default ComedySlider
