import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


const User = () => {
    const {users} = useSelector(state => state.user)
    const {id}= useParams()

    const user = users.filter (user=>user.id === parseInt(id))

    return (
        <div className="admin">
        {user.map(user=>(
            <div>
                {user.email}
            </div>
        ))}
        </div>
    )
}

export default User
