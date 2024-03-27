import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FactInMovie, MovieDtoV14 } from "@/models/Api"

interface movieState {
    movie: MovieDtoV14 | null
    facts: FactInMovie[]
}

const initialState: movieState = {
    movie: null,
    facts: [],
}

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie(state, action: PayloadAction<MovieDtoV14>) {
            state.movie = action.payload
        },
        setMoreFacts(state, action: PayloadAction<FactInMovie[]>) {
            state.facts = state.facts.concat(action.payload)
        },
    },
})

export const { setMovie, setMoreFacts } = movieSlice.actions

export default movieSlice.reducer
