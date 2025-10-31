import React from 'react'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
        <nav>Navigation</nav>
            <Outlet />
        <footer>Footer</footer>
    </>
  )
}
