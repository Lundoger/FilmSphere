import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {MovieDtoV14 } from "@/models/Api";

interface categoryState {
	adventureData: MovieDtoV14[] | null | undefined,
	animeData: MovieDtoV14[] | null | undefined,
	cartoonData: MovieDtoV14[] | null | undefined,
	comedyData: MovieDtoV14[] | null | undefined,
	fantasyData: MovieDtoV14[] | null | undefined,
	romanceData: MovieDtoV14[] | null | undefined,
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
		setAdventureData(state, action: PayloadAction<MovieDtoV14[]>) {
			state.adventureData = action.payload
		},
		setAnimeData(state, action: PayloadAction<MovieDtoV14[]>) {
			state.animeData = action.payload
		},
		setCartoonData(state, action: PayloadAction<MovieDtoV14[]>) {
			state.cartoonData = action.payload
		},
		setComedyData(state, action: PayloadAction<MovieDtoV14[]>) {
			state.comedyData = action.payload
		},
		setFantasyData(state, action: PayloadAction<MovieDtoV14[]>) {
			state.fantasyData = action.payload
		},
		setRomanceData(state, action: PayloadAction<MovieDtoV14[]>) {
			state.romanceData = action.payload
		},
	}
})

export const { setAdventureData, setAnimeData, setCartoonData, setComedyData, setFantasyData, setRomanceData } = categorySlice.actions

export default categorySlice.reducer