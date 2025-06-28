import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


const Prvate = () => {
    const a=localStorage.getItem("user")
  return  a? <Outlet/> : <Navigate to="/singup"/>
    }

export default Prvate