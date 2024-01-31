import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {SearchMovieDtoV14 } from "@/models/Api";

interface searchState {
	search: string,
	currentData: SearchMovieDtoV14[],
	hasMore: boolean,
	currentPage: number,
}

const initialState:searchState = {
	search: '',
	currentData: [],
	hasMore: false,
	currentPage: 1,
}	

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setData(state, action: PayloadAction<SearchMovieDtoV14[]>) {
			state.currentData = action.payload
		},
		setHasMore(state, action: PayloadAction<boolean>) {
			state.hasMore = action.payload
		},
		loadMoreData(state, action: PayloadAction<SearchMovieDtoV14[]>) {
			state.currentData = state.currentData.concat(action.payload)
		},
		nextPage(state) {
			state.currentPage += 1
		},
		setPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		}
	}
})

export const { setSearch, setData, setHasMore, loadMoreData, nextPage, setPage } = searchSlice.actions

export default searchSlice.reducer