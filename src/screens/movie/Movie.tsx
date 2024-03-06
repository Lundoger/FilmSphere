import { useGetMovieByIdQuery } from "@/api/filmSphereApi"
import { useActions } from "@/hooks/useActions"
import { useRouter } from "next/router"
import { useEffect } from "react"
import HeroSection from "./HeroSection/HeroSection"
import TrailerModal from "./ui/TrailerModal/TrailerModal"

const Hero = () => {
    const {
        push,
        query: { id },
    } = useRouter()
    const { data } = useGetMovieByIdQuery(id)
    const { setMovie } = useActions()

    useEffect(() => {
        if (data) setMovie(data)
    }, [data])

    return (
        <>
            <HeroSection />
            <TrailerModal />
        </>
    )
}

export default Hero
