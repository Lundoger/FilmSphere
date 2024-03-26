import { FactInMovie } from "@/models/Api"
import clsx from "clsx"
import { useEffect, useState } from "react"

interface FactItemProps {
    fact: FactInMovie
}

const FactItem = ({ fact }: FactItemProps) => {
    const [isSpoiler, setIsSpoiler] = useState<boolean>(false)

    useEffect(() => {
        setIsSpoiler(fact.spoiler)
    }, [])

    return (
        <li
            className={clsx(
                "movie-facts__item item-movie-facts",
                isSpoiler && "item-movie-facts--spoiler"
            )}
            onClick={() => setIsSpoiler(false)}
        >
            <span
                className={clsx(
                    "item-movie-facts__content",
                    isSpoiler && "item-movie-facts__content--spoiler"
                )}
                dangerouslySetInnerHTML={{ __html: fact.value ?? "" }}
            ></span>
        </li>
    )
}

export default FactItem
