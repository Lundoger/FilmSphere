import { useGetMovieByIdQuery } from "@/api/filmSphereApi"
import { useActions } from "@/hooks/useActions"
import { useRouter } from "next/router"
import { useEffect } from "react"
import TrailerModal from "./ui/TrailerModal/TrailerModal"
import Tabs from "./ui/Tabs/Tabs"
import Similar from "./ui/Similar/Similar"
import Persons from "./ui/Persons/Persons"
import HeroSection from "./ui/HeroSection/HeroSection"
import Facts from "./ui/Facts/Facts"
import ShareModal from "./ui/ShareModal/ShareModal"
import { NextSeo } from "next-seo"
import { useAppSelector } from "@/hooks/useAppSelector"
import { getTitleName } from "@/helpers/getTitleName"

const Hero = () => {
    const {
        query: { id },
    } = useRouter()
    const { data } = useGetMovieByIdQuery(id)
    const { setMovie } = useActions()

    useEffect(() => {
        if (data) setMovie(data)
    }, [data])

    const { movie } = useAppSelector(state => state.movieReducer)

    const year = movie?.year ? `(${movie.year})` : ""
    const name = getTitleName(movie?.name)
    const description =
        movie?.shortDescription ??
        movie?.description?.slice(0, 100) + "..." ??
        "Описание отсутсвует (╥_╥)"
    const title = movie ? `${name} ${year} смотреть онлайн в хорошем качестве` : "Загрука..."

    return (
        <>
            <NextSeo
                nofollow
                noindex
                title={title}
                description={description}
                openGraph={{
                    title,
                    description,
                    images: [
                        {
                            url: movie?.poster?.url ?? "",
                            alt: name,
                        },
                    ],
                }}
            />
            <HeroSection />
            <Tabs />
            <Similar />
            <Persons />
            <Facts />
            <TrailerModal />
            <ShareModal />
        </>
    )
}

export default Hero
