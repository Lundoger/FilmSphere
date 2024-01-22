import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface toggleState {
	openedMenu: boolean,
	isSearchModalOpen: boolean
}

const initialState:toggleState = {
	openedMenu: false,
	isSearchModalOpen: false
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
	}
})

export const { menuToggle, searchModalToggle } = toggleSlice.actions

export default toggleSlice.reducer