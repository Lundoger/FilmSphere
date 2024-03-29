import { useGetPersonByIdQuery } from "@/api/filmSphereApi"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Info from "./ui/Info"
import { useActions } from "@/hooks/useActions"

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
        </>
    )
}

export default Person
