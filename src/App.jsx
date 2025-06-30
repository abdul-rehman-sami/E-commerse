import { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Productsdetail from './components/Productsdetail'




function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <> <Navbar /> <Products /> </>
    },
    {
      path: "/:id",
      element: <><Navbar /> <Productsdetail /> </>
    }

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
