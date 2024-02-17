export function minutesToHour(titleLength: number = 0): string {
	const num = Math.abs(titleLength)
	const hours = Math.floor(num / 60)
	const minutes = Math.round(num % 60)

	if (titleLength < 60) return `${minutes} мин`;

	return `${hours} ч ${minutes} мин`;
}