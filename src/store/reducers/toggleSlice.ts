import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface toggleState {
	openedMenu: boolean,
	isSearchModalOpen: boolean,
	isTrailerModalOpen: boolean
}

const initialState:toggleState = {
	openedMenu: false,
	isSearchModalOpen: false,
	isTrailerModalOpen: false
}	

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		menuToggle(state, action: PayloadAction<boolean>) {
			state.openedMenu = action.payload
		},
		searchModalToggle(state, action: PayloadAction<boolean>) {
			state.isSearchModalOpen = action.payload
		},
		trailerModalToggle(state, action: PayloadAction<boolean>) {
			state.isTrailerModalOpen = action.payload
		}
	}
})

export const { menuToggle, searchModalToggle, trailerModalToggle } = toggleSlice.actions

export default toggleSlice.reducer