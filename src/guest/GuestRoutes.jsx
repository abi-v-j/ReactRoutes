import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import UserReg from './pages/user/UserReg'
import Login from './pages/login/Login'

const GuestRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Landing />} />
            <Route path="reg" element={<UserReg />} />
            <Route path="login" element={<Login />} />
        </Routes>)
}

export default GuestRoutes