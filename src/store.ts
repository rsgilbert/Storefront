import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice'
import cartReducer from './features/cart/cartSlice'
import { itemServiceApi } from './components/admin/items/service'

import { setupListeners } from '@reduxjs/toolkit/query'
import { cartItemServiceApi } from './components/cart/service';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    [itemServiceApi.reducerPath]: itemServiceApi.reducer,
    [cartItemServiceApi.reducerPath]: cartItemServiceApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    itemServiceApi.middleware,
    cartItemServiceApi.middleware,
  )
});


// optional but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type MyRootState = ReturnType<typeof store.getState>

// inferred type: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch 