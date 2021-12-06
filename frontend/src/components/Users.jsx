import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'


const Users = () => {
    const {users} = useSelector(state => state.user)

    return (
        <div className="admin">
        <p>Users</p>
        {users.length ? 
        <>
        {users.map(user=> {
            return (
                <div key={user.id} className="single-user">
                    <p>Email: {user.email}</p>
                    <p>{user.username}</p>
                    
                </div>

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
