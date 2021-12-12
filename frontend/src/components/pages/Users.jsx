import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Users = () => {
    const {users} = useSelector(state => state.user)

    return (
        <div className="admin">
        <p>Users</p>
        {users.length ? 
        <>
        <table>
        <thead></thead>
        <tbody>
        {users.map(user=> (
            <tr>
            <Link to={`/admin/users/${user.id}`}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
            </Link>
            </tr>
        )
        )}
        </tbody>
        </table>
        </>
        : <p>No users</p>}
            
        </div>
    )
}

export default Users
