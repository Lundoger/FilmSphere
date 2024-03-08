import { paths } from "@/helpers/routing"
import { PersonInMovie } from "@/models/Api"
import { UserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PersonItemProps {
    item: PersonInMovie
}

const PersonItem = ({ item }: PersonItemProps) => {
    const { photo, name, profession, id } = item

    return (
        <Link href={paths.person(id)} className="movie-persons__item item-movie-person">
            <div className="item-movie-person__image">
                {photo && (
                    <Image
                        alt={name ?? "Нет информации об имени (ಥ_ಥ)"}
                        fill
                        quality={100}
                        sizes="100%"
                        src={photo}
                    />
                )}
            </div>
            <div className="item-movie-person__content">
                <h3 className="item-movie-person__name">
                    {name ?? "Нет информации об имени (ಥ_ಥ)"}
                </h3>
                <span className="item-movie-person__profession">{profession}</span>
            </div>
        </Link>
    )
}

export default PersonItem
