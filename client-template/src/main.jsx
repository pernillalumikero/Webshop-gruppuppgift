import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './pages/Products'
import Product from './pages/Product'
import ManageProducts from './pages/admin/ManageProducts'
import CreateProduct from './pages/admin/CreateProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import Root from './pages/Root'
import './index.css'
import Checkout from './pages/Checkout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/admin",
        element: <ManageProducts />
      },
      {
        path: "/create",
        element: <CreateProduct />
      },

      {
        path: "/update/:id",
        element: <UpdateProduct />
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
