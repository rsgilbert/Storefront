import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice'
import itemlistReducer from './features/itemlist/itemlistSlice'
import cartReducer from './features/cart/cartSlice'
import newitemReducer from './features/newitem/newitemSlice'



export const store = configureStore({
  reducer: {
    search: searchReducer,
    itemlist: itemlistReducer,
    cart: cartReducer,
    newitem: newitemReducer,
  },
});
