import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice'
import itemlistReducer from './features/itemlist/itemlistSlice'
import cartReducer from './features/cart/cartSlice'
import newitemReducer from './features/newitem/newitemSlice'
import { itemServiceApi } from './components/admin/items/service'

import { setupListeners } from '@reduxjs/toolkit/query'

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


// optional but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type MyRootState = ReturnType<typeof store.getState>

// inferred type: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch 