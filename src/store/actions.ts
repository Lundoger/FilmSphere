import { menuToggle, searchModalToggle, trailerModalToggle } from '@/store/reducers/toggleSlice'
import { setSearch, setData, setHasMore, loadMoreData, nextPage, setPage } from '@/store/reducers/searchSlice'
import { setMovie } from '@/store/reducers/movieSlice'
import { setAdventureData, setAnimeData, setCartoonData, setComedyData, setFantasyData, setRomanceData } from '@/store/reducers/categorySlice'

export {
	menuToggle,
	searchModalToggle,
	trailerModalToggle,
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