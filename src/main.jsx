import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './pages/Home'
import Coffee from './pages/Coffee'
import DashBoard from './pages/DashBoard'
import CoffeeCards from './components/CoffeeCards/CoffeeCards'
import CoffeeDetails from './pages/CoffeeDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json')
          },
          {
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch('../coffees.json')
          },
        ]
      },
      {
        path: '/coffee',
        element: <Coffee></Coffee>,
        loader: () => fetch('../coffees.json')
      },
      {
        path: '/dashBoard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/coffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch('../coffees.json')
        
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
