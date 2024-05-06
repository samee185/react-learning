import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home'
import LandingPage from './component/LandingPage/LandingPage'
import About from "../src/component/about/About"
import Effect from './component/Effect'
import SingleProducts from './component/SingleProducts'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:'about',
        element: 'About page'
      },
      {
        path:'contact',
        element: 'contact'
      }
    ]
  },
  {
    path:'/products',
    element: <p>Product</p>,
  },
  {
    path:'/products/:id',
    element: <SingleProducts/>
  }
])















// const Router = createBrowserRouter([
  
//   {
//     path:"/",
//     element: <LandingPage />,

//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//     },
//     {
//       path:"effect",
//       element: <Effect />
//     }

//     ]
//   }
// ])

export default Router