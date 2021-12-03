import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/userActions'
import SideBar from './SideBar'

const Users = () => {
    const {users,error,user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
        
    }, [])
    return (
        
        <div className="admin">

        {user.isAdmin ? (
                <>
        <div >
                
                <p> List of Users</p>
                {/* <Users/>  */}
                

            {users.length ? (
                    <div >
                    {users.map(user=>{
                        return (
                            <div key={user.id}>
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
            
            </div>
            </>
            ) : <p className="error-msg">Error: Not Authorised</p>}
        </div>
    )
}

export default Users
