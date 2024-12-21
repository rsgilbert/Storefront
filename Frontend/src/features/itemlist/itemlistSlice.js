import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as firebase from "firebase/app"
import "firebase/firestore"
import { initializeFirebase } from '../../functions'

const initialState = {
    itemlist: [],
    status: 'idle',
    error: null
}

export const fetchItems = createAsyncThunk('items/fetchItems', 
    async () => {
        initializeFirebase()
        const db = firebase.firestore()
        return db.collection("items")
            .get()
            .then(snapshot => {
                const items = []
                snapshot.forEach(doc => items.push(doc.data()))
                return items
            })
            .catch(e => console.log("Error getting docs: ", e))
    })

export const watchItems = createAsyncThunk('items/watchItems', 
    async () => {
        initializeFirebase()
        const db = firebase.firestore()
        db.collection("items")
            .onSnapshot(function (querySnapshot) {
                var items = []
                querySnapshot.forEach(function (doc) {
                    items.push(doc.data())
                })
                return items
            })
    }
)



const itemlistSlice = createSlice({
    name: "itemlist",
    initialState,
    reducers: {
        itemlistUpdated(state, action) {
            console.log("payload is ", action.payload)
            state.itemlist = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.itemlist = action.payload
            state.status = 'succeeded'
        })
        builder.addCase(fetchItems.rejected,  (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        })
    }
})


export const {  } = itemlistSlice.actions
 
export default itemlistSlice.reducer

export const selectAllItems = state => ({
    itemlist: state.itemlist.itemlist,
    status: state.itemlist.status 
})

export const selectItem = (state, id) => {
    const item = state.itemlist.itemlist.find(item => item.id === id)

    return {
        item,
        status: state.itemlist.status
    }
}

