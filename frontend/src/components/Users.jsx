import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import { Link } from 'react-router-dom'


const Users = () => {
    const {users} = useSelector(state => state.user)

    return (
        <div className="admin">
        <p>Users</p>
        {users.length ? 
        <>
        {users.map(user=> {
            return (
                <Link to={`/admin/users/${user.id}`}>
                <div key={user.id} className="single-user">
                    <p>Email: {user.email}</p>
                    <p>{user.username}</p>
                    
                </div>
                </Link>

            )
        }
        )}
        <Pagination />
        </>
        : <p>No users</p>}
            
        </div>
    )
}

export default Users
