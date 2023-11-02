import React from 'react'
import { Outlet } from 'react-router-dom'

// Outlet is the place where the child will be rendered
const GuestLayout = () => {
  return (
    <div>
        <Outlet />

    </div>
  )
}

export default GuestLayout