import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './pages/Products'
import ManageProducts from './pages/admin/ManageProducts'
import Root from './pages/Root'
import './index.css'

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
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router} />
  </React.StrictMode>,
)
