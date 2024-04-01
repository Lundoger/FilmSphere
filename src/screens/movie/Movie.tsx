import { useGetMovieByIdQuery } from "@/api/filmSphereApi"
import { useActions } from "@/hooks/useActions"
import { useRouter } from "next/router"
import { useEffect } from "react"
import TrailerModal from "./ui/TrailerModal/TrailerModal"
import Tabs from "./ui/Tabs/Tabs"
import Similar from "./ui/Similar/Similar"
import Persons from "./ui/Persons/Persons"
import HeroSection from "./ui/HeroSection/HeroSection"
import ShareModal from "./ui/ShareModal/ShareModal"
import { NextSeo } from "next-seo"
import { getTitleName } from "@/helpers/getTitleName"
import Player from "./ui/Player/Player"
import Facts from "@/widgets/Facts/Facts"

const Movie = () => {
    const {
        query: { id },
    } = useRouter()
    const { data } = useGetMovieByIdQuery(id)
    const { setMovie } = useActions()

    useEffect(() => {
        if (data) setMovie(data)
    }, [data])

    const year = data?.year ? `(${data.year})` : ""
    const name = getTitleName(data?.name)
    const description =
        data?.shortDescription ?? data?.description?.slice(0, 100) ?? "Описание отсутсвует (╥_╥)"
    const title = data
        ? `${name} ${year} смотреть онлайн в хорошем качестве`
        : "Без названия смотреть онлайн в хорошем качестве"

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                nofollow
                noindex
                openGraph={{
                    title,
                    description,
                    images: [
                        {
                            url: data?.poster?.url ?? "",
                            alt: name,
                        },
                    ],
                }}
            />
            <HeroSection />
            <Tabs />
            <Player />
            <Similar />
            <Persons />
            <Facts facts={data?.facts ?? []} />
            <TrailerModal />
            <ShareModal />
        </>
    )
}

export default Movie
