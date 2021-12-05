import React from 'react'
import { useSelector } from 'react-redux'


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
        </>
        : <p>No users</p>}
            
        </div>
    )
}

export default Users
