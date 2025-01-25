import Navbar from '../components/Navbar.jsx'
import React from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout