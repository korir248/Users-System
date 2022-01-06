import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteUser, getUsers } from '../../redux/actions/userActions'
import { red } from '@mui/material/colors'


const Users = () => {
    const {users} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const deletingUser = (email)=>{
        dispatch(deleteUser(email))
    }

    useEffect(() => {
        dispatch(getUsers())        

    }, [dispatch])

    return (
        <div className="admin">
        <p className="title">Users</p>
        {users.length ? 
        <>
        <>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Fullname</td>
                    <td>Username</td>
                    <td>Email</td>
                    {/* <td>IsSent</td> */}
                    <td></td>
                </tr>

            </thead>
            <hr/>
            <tbody>
            {users.map((user,index)=> (
                
                <tr key={user.id}>
                <td>{index +1}</td>
                <td><Link to={`/admin/users/${user.id}`}>{user.fullname}</Link></td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* <td>{user.isSent ? "Sent" : "OnGoing"}</td> */}
                <td><DeleteIcon sx={{ color: red[500] }} className="delete-btn" onClick={()=> deletingUser(user.email)}/> </td>
                {/* <td><Checkbox /></td> */}
                </tr>
                
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
