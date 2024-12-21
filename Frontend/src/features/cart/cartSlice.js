import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: [
        // {
        //     id: "1",
        //     name: "Mix Pattern iPhone Case",
        //     description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
        //     price: 23000,
        //     specs: "7/8, 7P/8P, X",
        //     quantity: "3@ & 2X",
        //     itemQuantity: 3,
        //     pictures: [
        //         "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/7EB91210-25AE-4EE5-B60E-56599ED8A714.jpeg",
        //         "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/F4033A57-0473-4014-B35B-AE70561DB6D8.jpeg",
        //         "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/E4936DBC-904B-4EF4-806F-A2D4A34628A2.jpeg",
        
        //     ]
        // },
        // {
        //     id: "2",
        //     name: "Cactus iPhone Case",
        //     description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
        //     price: 23000,
        //     specs: "7/8, 7P/8P, X",
        //     quantity: "3@ & 2X",
        //     itemQuantity: 8,
        //     pictures: [
        //         "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/6EA378FA-085E-45A7-8CD7-4FBAB5DC20FB.jpeg",
        //         "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/5C8FF7C3-F922-47F5-9608-BE62BAAC2594.jpeg",
        //         "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/B0A59ABD-E3B9-4781-A647-C628CE28FD0B.jpeg",
        //     ]
        // },
    ]
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartAdded(state, action) {
            const  cartItem  = action.payload
            if(!state.cart.find(item => item.id === cartItem.id)) {
                state.cart.push(cartItem)
            }
        },

        cartItemQuantityUpdated(state, action) {
            const { cartItemId, itemQuantity } = action.payload
            const item = state.cart.find(item => item.id === cartItemId)
            item.itemQuantity = itemQuantity
        },
        cartItemRemoved(state, action) {
            const { id } = action.payload
            state.cart = state.cart.filter(item => item.id !== id)
        }


    }
})

export const { cartAdded, cartItemQuantityUpdated, cartItemRemoved } = cartSlice.actions
 
export default cartSlice.reducer

export const selectAllCartItems = state => state.cart.cart

export const selectOneCartItem = (state, id) => state.cart.cart.find(item => item.id === id)

export const selectCartCount = state => state.cart.cart.length

export const selectIsCarted = (state, itemId) => {
    return !!state.cart.cart.find(item => item.id === itemId)
}

export const selectCartItemQuantity = (state, id) => {
    const cartItem = state.cart.cart.find(item => item.id === id)
    return cartItem ? cartItem.itemQuantity : undefined
}


