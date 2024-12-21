import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from '../../decl'
import { MyRootState } from '../../store'

interface InitialState {
    cart: CartItem[]
}
const initialState: InitialState = {
    cart: []
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartAdded(state, action) {
            const cartItem = action.payload
            if (!state.cart.find(item => item.Id === cartItem.Id)) {
                state.cart.push(cartItem)
            }
        },

        cartItemQuantityUpdated(state, action) {
            const { cartItemId, itemQuantity } = action.payload
            const cartItem = state.cart.find(item => item.ItemId === cartItemId)
            if (cartItem) {
                cartItem.ItemQuantity = itemQuantity
            }
        },
        cartItemRemoved(state, action) {
            const { id } = action.payload
            state.cart = state.cart.filter(item => item.Id !== id)
        }


    }
})

export const { cartAdded, cartItemQuantityUpdated, cartItemRemoved } = cartSlice.actions

export default cartSlice.reducer

// @ts-ignore
export const selectAllCartItems = (state: MyRootState) => state.cart.cart
// @ts-ignore
export const selectOneCartItem = (state: MyRootState, Id: string) => state.cart.cart.find(item => item.Id === Id)
// @ts-ignore
export const selectCartCount = (state: MyRootState) => state.cart.cart.length
// @ts-ignore
export const selectIsCarted = (state, itemId) => {
    // @ts-ignore
    return !!state.cart.cart.find(item => item.Id === itemId)
}
// @ts-ignore
export const selectCartItemQuantity = (state: MyRootState, Id: string) => {
    // @ts-ignore
    const cartItem = state.cart.cart.find(item => item.Id === Id)
    return cartItem ? cartItem.itemQuantity : undefined
}


