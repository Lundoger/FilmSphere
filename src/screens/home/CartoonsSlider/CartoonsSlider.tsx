import { useGetRecommendTitleQuery } from "@/api/filmSphereApi";

const CartoonsSlider = () => {
    const { data, isLoading, isError } = useGetRecommendTitleQuery({
        limit: 10,
    })

    return (
		<></>
    )
}

export default CartoonsSlider;
