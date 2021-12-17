import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import { getUsers } from '../../redux/actions/userActions'


const Users = () => {
    const {users} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const deletingUser = (id)=>{
        console.log("deleting...");
        // dispatch(deleteTask(id))
    }

    useEffect(() => {
        dispatch(getUsers())        

    }, [dispatch])

    return (
        <div className="admin">
        <p>Users</p>
        {users.length ? 
        <>
        <>
        <table>
            <thead>
                <tr>
                    <td>Fullname</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>IsSent</td>
                </tr>

            </thead>
            <tbody>
            {users.map(user=> (
                <Link to={`/admin/users/${user.id}`}>
                <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.isSent ? "Sent" : "OnGoing"}</td>
                {/* <td><DeleteIcon className="delete-btn" onClick={()=> deletingUser(user.id)}/> </td> */}
                {/* <td><Checkbox /></td> */}
                </tr>
                </Link>
        )
        )}
        </tbody>
        </table>
        </>
       
        </>
        : <p>No users</p>}
            
        </div>
    )
}

export default Users
