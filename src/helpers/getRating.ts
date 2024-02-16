import { Rating } from "@/models/Api";

export function getRating(rating: Rating | null | undefined) {
	return (rating?.imdb ?? rating?.kp ?? 0).toFixed(1)
}