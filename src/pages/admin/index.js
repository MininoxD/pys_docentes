import React from 'react'
import { Outlet } from 'react-router-dom'
import NavHeader from '../../components/NavBar'
const Admin = () => {
  return (
    <>
      <NavHeader/>
      <Outlet/>
    </>
  )
}

export default Admin