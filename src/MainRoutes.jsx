import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './admin/App'
import User from './user/App'
import Guest from './guest/App'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Guest/> }/>
        <Route path="admin/*" element={ <Admin/> }/>
        <Route path="user/*" element={ <User/> }/>
    </Routes>
  )
}

export default MainRoutes