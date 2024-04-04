import { getProfessions } from "@/helpers/getProfessions"
import { timeToDate } from "@/helpers/timeToDate"
import { useAppSelector } from "@/hooks/useAppSelector"
import Image from "next/image"

const Info = () => {
    const person = useAppSelector(state => state.personReducer.person)

    const items = [
        {
            label: "Карьера:",
            content: getProfessions(person?.profession),
        },
        {
            label: "Дата рождения:",
            content: timeToDate(person?.birthday, "D MMMM YYYY"),
        },
    ]

    return (
        <section className="person-info">
            <div className="person-info__container">
                <div className="person-info__grid">
                    <div className="person-info__image">
                        {person?.photo && (
                            <Image
                                alt={person.name ?? "Нет информации об имени (ಥ_ಥ)"}
                                fill
                                quality={100}
                                sizes="100%"
                                src={person.photo}
                            />
                        )}
                    </div>
                    <div className="person-info__names">
                        <h2 className="person-info__name">{person?.name ?? "Без имени"}</h2>
                        {person?.enName && (
                            <h4 className="person-info__en-name">{person?.enName}</h4>
                        )}
                    </div>
                    <div className="person-info__flex flex-person-info">
                        {items.map((item, i) => (
                            <div key={i} className="flex-person-info__cnt">
                                <div className="flex-person-info__label">{item.label}</div>
                                <div className="flex-person-info__content">{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
