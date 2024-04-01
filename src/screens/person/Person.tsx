import { useGetPersonByIdQuery } from "@/api/filmSphereApi"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Info from "./ui/Info/Info"
import { useActions } from "@/hooks/useActions"
import MovieList from "./ui/MovieList/MovieList"
import Facts from "@/widgets/Facts/Facts"

const Person = () => {
    const {
        query: { id },
    } = useRouter()
    const { data } = useGetPersonByIdQuery(id)
    const { setPerson } = useActions()

    useEffect(() => {
        if (data) setPerson(data)
    }, [data])

    return (
        <>
            <Info />
            <MovieList />
            <Facts className="person-facts" facts={data?.facts ?? []} />
        </>
    )
}

export default Person
