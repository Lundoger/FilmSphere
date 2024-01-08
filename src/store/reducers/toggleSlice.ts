import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface toggleState {
	openedMenu: boolean
}

const initialState:toggleState = {
	openedMenu: false
}	

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		menuToggle(state) {
			state.openedMenu = !state.openedMenu
		},
	}
})

export default toggleSlice.reducer