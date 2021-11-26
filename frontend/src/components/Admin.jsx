import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { getUsers } from '../redux/actions/userActions'

const Admin = () => {
    const {users,user,error} = useSelector(state => state.user)
    const dispatch = useDispatch()
    // if (user){
    //     if(!user.isAdmin) return <Navigate to={"/"}/>
    // }else{
    //     return <Navigate to={"/"} />
    // }
    const gettingUsers = ()=>{
        dispatch(getUsers())
    }

    return (
        <div className="admin-page">
            {user.isAdmin ? (
                <>
                <p> Welcome to the Admin Panel</p>
                <button onClick={()=> gettingUsers()} >Show users!</button>
                {users.length ? (
                    <div>
                    </div>
                ) : (
                    <p>{error}</p>
                    )}
                </>

            ) : <p className="error-msg">Error: Not Authorised</p>}
        </div>
    )
}

export default Admin
