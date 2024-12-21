import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    search: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchUpdated(state, action) {
            const { search } = action.payload
            state.search = search
        },

        searchCleared(state) {
            state.search = ""
        }
    }
})

export const { searchUpdated, searchCleared } = searchSlice.actions

export default searchSlice.reducer

export const selectSearch = state => state.search.search