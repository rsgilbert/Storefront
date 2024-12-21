import React from 'react';
import './App.css';
import './CustomStyles.css'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import { ItemListPage } from './features/itemlist/ItemListPage';
import { Header } from './components/Header';
import { ItemPage } from './features/item/ItemPage';
import { CartPage } from './features/cart/CartPage';
import { SearchPage } from './features/search/SearchPage';
import { AdminPage } from './features/admin/AdminPage';
import { NewItemPage } from './features/newitem/NewItemPage';
import { PicturesPage } from './features/pictures/PicturesPage';
import { EditPage } from './features/edit/EditPage';
import { initializeFirebase } from './functions';
import { ManageItems } from './features/admin/items/ManageItems';




const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,

    children: [
      {
        path: '/',
        element: <ItemListPage />
      },
      {
        path: '/items/:itemId',
        element: <ItemPage />
      },

      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/admin',
        element: <AdminPage />
      },
      {
        path: '/admin/new',
        element: <NewItemPage />
      },
      {
        path: "/admin/items/:id/pictures",
        element: <PicturesPage />
      },
      {
        path: "/admin/items/:id",
        component: <EditPage />
      },
      {
        path: "/admin/items",
        component: <ManageItems />
      },
      {
        path: '/*',
        component: <Navigate to='/' />
      }
    ]
  },
])

function PageLayout() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
