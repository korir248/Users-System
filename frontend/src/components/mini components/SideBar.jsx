import React from 'react'
import { useDispatch} from 'react-redux'
import { Link} from 'react-router-dom'
import { logOut } from '../../redux/actions/userActions'


const SideBar = () => {
    const dispatch = useDispatch()
    const loggingOut = ()=>{
        dispatch(logOut())      
    }

    return (
        <div className="sidebar">
       
            <Link to="/admin"><li>Dashboard</li></Link>
            <Link to={"/admin/users"}><li >Users</li></Link>
            <Link to={"/admin/projects"}><li >Projects</li></Link>
            <Link to={"/admin/tasks"}><li>Tasks</li></Link>
            <li>Settings</li>
            <Link to="/"><li onClick={()=> loggingOut()}>Log Out</li></Link>       
        
            
        </div>
    )
}

export default SideBar
