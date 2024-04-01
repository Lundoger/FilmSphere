import FactItem from "./ui/FactItem"
import { useState } from "react"
import { Button } from "@/shared/Button/Button"
import { FactInMovie, FactInPerson } from "@/models/Api"
import clsx from "clsx"

const MAX_FACTS = 5

interface FactsProps {
    facts: FactInMovie[] | FactInPerson[] | null
    className?: string
}

const Facts = ({ facts, className }: FactsProps) => {
    const [isAllFacts, setIsAllFacts] = useState<boolean>(false)

    if (!facts || !facts.length) return null

    const factsToShow = isAllFacts ? facts : facts.slice(0, MAX_FACTS)

    return (
        <section className={clsx("facts", className)}>
            <div className="facts__container">
                <h2 className="facts__title title">Знаете ли вы что...</h2>
                <ul className="facts__list">
                    {factsToShow.map((fact, i) => (
                        <FactItem key={i} fact={fact} />
                    ))}
                </ul>
                {MAX_FACTS < facts.length && (
                    <Button
                        onClick={() => setIsAllFacts(prev => !prev)}
                        className="facts__load-more"
                        rounded
                    >
                        <span>{isAllFacts ? "Скрыть" : "Показать все"}</span>
                    </Button>
                )}
            </div>
        </section>
    )
}

export default Facts
