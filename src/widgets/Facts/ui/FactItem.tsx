import { FactInMovie, FactInPerson } from "@/models/Api"
import clsx from "clsx"
import { useEffect, useState } from "react"

interface FactItemProps {
    fact: FactInMovie | FactInPerson
}

const FactItem = ({ fact }: FactItemProps) => {
    const [isSpoiler, setIsSpoiler] = useState<boolean>(false)

    useEffect(() => {
        if ("spoiler" in fact) setIsSpoiler(fact.spoiler)
    }, [])

    return (
        <li
            className={clsx("facts__item item-facts", isSpoiler && "item-facts--spoiler")}
            onClick={() => setIsSpoiler(false)}
        >
            <span
                className={clsx("item-facts__content", isSpoiler && "item-facts__content--spoiler")}
                dangerouslySetInnerHTML={{ __html: fact.value ?? "" }}
            ></span>
        </li>
    )
}

export default FactItem
