import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {SearchMovieEntity } from "@/models/Api";

interface searchState {
	search: string,
	currentData: SearchMovieEntity[],
}

const initialState:searchState = {
	search: '',
	currentData: [],
}	

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setData(state, action: PayloadAction<SearchMovieEntity[]>) {
			state.currentData = action.payload
		},
	}
})

export const { setSearch, setData } = searchSlice.actions

export default searchSlice.reducer