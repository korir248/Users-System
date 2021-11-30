import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    useEffect(()=>{

    },[users])

    return (
        <div className="admin-page">
            {user.isAdmin ? (
                <>
                <p> Welcome to the Admin Panel</p>
                <button onClick={()=> gettingUsers()} >Show users!</button>
                {users.length ? (
                    <div >
                    {users.map(user=>{
                        return (
                            <div className="list-users" key={user.id}>
                                <h4>{user.id}</h4>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                                <p>{user.password}</p>
                            </div>
                        )
                    }) }
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
