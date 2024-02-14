import { PersonInMovie } from "@/models/Api";

export function getActors(persons: PersonInMovie[] | null | undefined) {
	const actors = persons ? persons.filter(person => person.enProfession === 'actor') : 'Нет информации об актёрах'

	return actors
}