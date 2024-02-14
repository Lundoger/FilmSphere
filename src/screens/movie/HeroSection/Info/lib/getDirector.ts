import { PersonInMovie } from "@/models/Api";

export function getDirector(persons: PersonInMovie[] | undefined | null) {
	const director = persons ? persons.filter(person => person.enProfession === 'director') : 'Нет информации о режиссёре'

	return director
}