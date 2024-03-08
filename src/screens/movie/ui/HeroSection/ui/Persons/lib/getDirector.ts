import { PersonInMovie } from "@/models/Api";

export function getDirector(persons: PersonInMovie[]) {
	const director = persons.filter(person => person.enProfession === 'director')

	return director
}