import { Profession } from "@/models/Api"

export function getProfessions(professions: Profession[] | undefined) {
    const result = professions
        ? professions.map(item => item.value).join(", ")
        : "Нет информации о профессии"

    return result
}
