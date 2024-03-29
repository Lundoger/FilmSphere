import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Person } from "@/models/Api"

interface personState {
    person: Person | null
}

const initialState: personState = {
    person: null,
}

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        setPerson(state, action: PayloadAction<Person>) {
            state.person = action.payload
        },
    },
})

export const { setPerson } = personSlice.actions

export default personSlice.reducer
