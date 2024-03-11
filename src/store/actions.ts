import {
    menuToggle,
    searchModalToggle,
    trailerModalToggle,
    shareModalToggle,
} from "@/store/reducers/toggleSlice"
import { setMovie } from "@/store/reducers/movieSlice"
import {
    setSearch,
    setData,
    setHasMore,
    loadMoreData,
    nextPage,
    setPage,
} from "@/store/reducers/searchSlice"
import {
    setAdventureData,
    setAnimeData,
    setCartoonData,
    setComedyData,
    setFantasyData,
    setRomanceData,
} from "@/store/reducers/categorySlice"

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
    setAdventureData,
    setAnimeData,
    setCartoonData,
    setComedyData,
    setFantasyData,
    setRomanceData,
}
