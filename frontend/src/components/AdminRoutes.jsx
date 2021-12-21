import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Login from './main/Login';
import Signup from './main/Signup';
import SideBar from './mini components/SideBar';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Project from './pages/Project';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import User from './pages/User';
import Users from './pages/Users';

const AdminRoutes = () => {
    return (
        <div>
        
        <div className="admin-page">

        <SideBar/>
        <Routes>      
        {/* <Route path="/users" element={<Users/>} /> */}
        <Route path="/admin" element={ <Admin/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/projects" element={<Projects/>}/>
        <Route path="/admin/tasks" element={<Tasks/>}/>
        <Route path="/admin/users/:id" element={<User/>}/>
        <Route path="/admin/projects/:id" element={<Project/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        
        </Routes>
        </div>
            
        </div>
    )
}

export default AdminRoutes
