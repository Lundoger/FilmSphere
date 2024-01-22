import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface searchState {
	search: string,
}

const initialState:searchState = {
	search: '',
}	

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
	}
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer