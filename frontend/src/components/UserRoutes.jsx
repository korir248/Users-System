import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
const UserRoutes = () => {
    return (
        <div>
            <div className="user-page">
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            </div>
        </div>
    )
}

export default UserRoutes
