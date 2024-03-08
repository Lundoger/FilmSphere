import { PersonInMovie } from "@/models/Api";

export function getActors(persons: PersonInMovie[]) {
	const actors = persons.filter(person => person.enProfession === 'actor').slice(0, 3)

	return actors
}