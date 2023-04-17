import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './pages/Products'
import Product from './pages/Product'
import ManageProducts from './pages/admin/ManageProducts'
import Root from './pages/Root'
import './index.css'
import Checkout from './pages/Checkout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/update-pun/:id",
      //   element: <Contact />,
      // },
      {
        path: "/admin",
        element: <ManageProducts />
      },

      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router} />
  </React.StrictMode>,
)
