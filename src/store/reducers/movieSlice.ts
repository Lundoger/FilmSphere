import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {MovieDtoV14 } from "@/models/Api";

interface movieState {
	movie: MovieDtoV14 | null,
}

const initialState:movieState = {
	movie: null,
}

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setMovie(state, action: PayloadAction<MovieDtoV14>) {
			state.movie = action.payload
		},
	}
})

export const { setMovie } = movieSlice.actions

export default movieSlice.reducer