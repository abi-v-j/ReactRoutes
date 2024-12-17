import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import EditProfile from './pages/editProfile/EditProfile'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Profile />} />
            <Route path="edit" element={<EditProfile />} />
        </Routes>
    )
}

export default UserRoutes