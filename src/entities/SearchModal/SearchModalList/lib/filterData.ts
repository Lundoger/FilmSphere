import { SearchMovieResponseDtoV14 } from "@/models/Api"

export function filterData(data: SearchMovieResponseDtoV14) {
    const filteredData = data.docs.filter(
        item => item.poster !== null && item.poster?.url !== null && item.name !== ""
    )

    return filteredData
}
