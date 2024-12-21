import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice'
import itemlistReducer from './features/itemlist/itemlistSlice'
import cartReducer from './features/cart/cartSlice'
import newitemReducer from './features/newitem/newitemSlice'
import { itemServiceApi } from './features/itemlist/service'


export const store = configureStore({
  reducer: {
    search: searchReducer,
    itemlist: itemlistReducer,
    cart: cartReducer,
    newitem: newitemReducer,
    [itemServiceApi.reducerPath]: itemServiceApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    itemServiceApi.middleware
  )
});
