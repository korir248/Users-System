import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


const User = () => {
    const {users} = useSelector(state => state.user)
    const {id}= useParams()
    const user = users.find(user=>user.id === parseInt(id))
    console.log(user);

    return (
        <div className="admin">
        <h4> Details for {user.fullname}</h4>
        {/* {user.map(user=>( */}
            <div>
            <p>{user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>{user.password}</p>          


            </div>
        {/* ))} */}
        </div>
    )
}

export default User
