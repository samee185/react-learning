 import React from 'react'
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom'
 
 const LandingPage = () => {
   return (
     <div>
        <Navbkar />
        <Outlet />
        <h1>Footer</h1>
     </div>
   )
 }
 
 export default LandingPage