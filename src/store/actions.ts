import {
    menuToggle,
    searchModalToggle,
    trailerModalToggle,
    shareModalToggle,
} from "@/store/reducers/toggleSlice"
import { setMovie } from "@/store/reducers/movieSlice"
import { setPerson } from "@/store/reducers/personSLice"
import {
    setSearch,
    setData,
    setHasMore,
    loadMoreData,
    nextPage,
    setPage,
} from "@/store/reducers/searchSlice"

export {
    menuToggle,
    searchModalToggle,
    trailerModalToggle,
    shareModalToggle,
    setSearch,
    setData,
    setHasMore,
    loadMoreData,
    nextPage,
    setPage,
    setMovie,
    setPerson,
}
