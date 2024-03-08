import { useGetMovieByIdQuery } from "@/api/filmSphereApi"
import { useActions } from "@/hooks/useActions"
import { useRouter } from "next/router"
import { useEffect } from "react"
import HeroSection from "./HeroSection/HeroSection"
import TrailerModal from "./ui/TrailerModal/TrailerModal"
import Tabs from "./ui/Tabs/Tabs"
import Similar from "./ui/Similar/Similar"
import Persons from "./ui/Persons/Persons"

const Hero = () => {
    const {
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
            <Tabs />
            <Similar />
            <Persons />
            <TrailerModal />
        </>
    )
}

export default Hero
