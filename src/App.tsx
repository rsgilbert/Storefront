import React from 'react';
import './App.css';
import './CustomStyles.css'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import { ItemListPage } from './components/ItemListPage';
import { Header } from './components/Header';
import { ItemCardPage } from './components/ItemPage';
import { CartPage } from './features/cart/CartPage';
import { SearchPage } from './features/search/SearchPage';
import { PicturesPage } from './features/pictures/PicturesPage';
import Items from './components/admin/items/list';
import EditItem from './components/admin/items/edit';
import NewItem from './components/admin/items/new';
import './components/css/commandbar.scss'



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
        path: '/items/:Id',
        element: <ItemCardPage />
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
        element: <Navigate to="/admin/items" />
      },
    
      {
        path: "/admin/items/:id/pictures",
        element: <PicturesPage />
      },
    
      {
        path: "/admin/items",
        element: <Items />
      },
      {
        path: "/admin/items/new",
        element: <NewItem />
      },
      {
        path: "/admin/items/:Id",
        element: <EditItem />
      },
      {
        path: '/*',
        element: <Navigate to='/' />
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
