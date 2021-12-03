import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/userActions'
import SideBar from './SideBar'
import Users from './Users'

const Admin = () => {
    const {users,user,error} = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const gettingUsers = ()=>{
        dispatch(getUsers())
    }
    // useEffect(()=>{
    //     dispatch(getUsers())

    // })

    return (
        <div className="admin">

        {/* {isAdmin? } */}
            {user.isAdmin ? (
                <>
        <div className="other">
                
                <p> Welcome to the Admin Panel</p>
                {/* <Users/>  */}
                

            
            </div>
            </>
            ) : <p className="error-msg">Error: Not Authorised</p>}
        </div>
    )
}

export default Admin
