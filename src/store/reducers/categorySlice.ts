import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {MovieDocsResponseDtoV14 } from "@/models/Api";

interface categoryState {
	adventureData: MovieDocsResponseDtoV14 | null | undefined,
	animeData: MovieDocsResponseDtoV14 | null | undefined,
	cartoonData: MovieDocsResponseDtoV14 | null | undefined,
	comedyData: MovieDocsResponseDtoV14 | null | undefined,
	fantasyData: MovieDocsResponseDtoV14 | null | undefined,
	romanceData: MovieDocsResponseDtoV14 | null | undefined,
}

const initialState:categoryState = {
	adventureData: null,
	animeData: null,
	cartoonData: null,
	comedyData: null,
	fantasyData: null,
	romanceData: null,
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setAdventureData(state, action: PayloadAction<MovieDocsResponseDtoV14>) {
			state.adventureData = action.payload
		},
		setAnimeData(state, action: PayloadAction<MovieDocsResponseDtoV14>) {
			state.animeData = action.payload
		},
		setCartoonData(state, action: PayloadAction<MovieDocsResponseDtoV14>) {
			state.cartoonData = action.payload
		},
		setComedyData(state, action: PayloadAction<MovieDocsResponseDtoV14>) {
			state.comedyData = action.payload
		},
		setFantasyData(state, action: PayloadAction<MovieDocsResponseDtoV14>) {
			state.fantasyData = action.payload
		},
		setRomanceData(state, action: PayloadAction<MovieDocsResponseDtoV14>) {
			state.romanceData = action.payload
		},
	}
})

export const { setAdventureData, setAnimeData, setCartoonData, setComedyData, setFantasyData, setRomanceData } = categorySlice.actions

export default categorySlice.reducer