import React from 'react'
import { Outlet } from 'react-router'
import NavHeader from '../../components/NavBar'
const Index = () => {
  return (
    <>
      <NavHeader/>
      <Outlet/>
    </>
  )
}

export default Index
