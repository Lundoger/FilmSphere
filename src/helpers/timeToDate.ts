import dayjs from "dayjs"
import "dayjs/locale/ru"

export function timeToDate(date: string | number | Date | undefined | null, format: string) {
    dayjs.locale("ru")

    return dayjs(date).format(format)
}
