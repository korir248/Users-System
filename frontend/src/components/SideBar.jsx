import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/userActions'
import { Link} from 'react-router-dom'

const SideBar = () => {

    const dispatch = useDispatch()
    
    const gettingUsers = ()=>{
        dispatch(getUsers())
    }
    return (
        <div className="sidebar">
        {/* <button onClick={()=> gettingUsers()} >Show users!</button> */}
        <ul>
            <Link to={"/admin/users"}><li>Users</li></Link>
            <Link to={"/admin/projects"}><li>Projects</li></Link>
            <li>Tasks</li>
            <li></li>
        </ul>
        
            
        </div>
    )
}

export default SideBar
