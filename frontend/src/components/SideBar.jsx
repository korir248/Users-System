import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,Navigate} from 'react-router-dom'
import { getProjects } from '../redux/actions/projectActions'
import { getUsers, logOut } from '../redux/actions/userActions'


const SideBar = () => {
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const gettingUsers = ()=>{
        dispatch(getUsers())
    }
    const gettingProjects = ()=>{
        dispatch(getProjects())
    }
    const loggingOut = ()=>{
        console.log(user);
        dispatch(logOut())      
    }

    return (
        <div className="sidebar">
       
            <Link to="/admin"><li>Dashboard</li></Link>
            <Link to={"/admin/users"}><li onClick={()=> gettingUsers()}>Users</li></Link>
            <Link to={"/admin/projects"}><li onClick={()=> gettingProjects()}>Projects</li></Link>
            <Link to={"/admin/tasks"}><li>Tasks</li></Link>
            <li>Settings</li>
            <li onClick={()=> loggingOut()}>Log Out</li>        
        
            
        </div>
    )
}

export default SideBar
