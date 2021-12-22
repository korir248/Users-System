import React,{ } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logOut } from '../redux/actions/userActions'
import UserDashboard from './UserDashboard'
const Home = ()=> {   

    const {user} = useSelector(state => state.user)
    
    const dispatch = useDispatch()

    const loggingOut = ()=>{
        dispatch(logOut())
    }
    return (
        <div className="admin">
        <div className="homepage">
        
        
        {user.username ? (
            <div>
            {/* <p>Welcome { user ? user.username : "Home"}!</p> */}
            <UserDashboard/>
            <div>
                <Link to="/">
                    <button onClick={()=>loggingOut()}>Log Out</button>
                </Link>
            </div>
            </div>
        ): (
            <div className="home-page">
                <p>Welcome to UsersSystem</p>
                <p>Please <a href="/login">login</a>  or <a href="/register">signup</a> to gain access!</p>
            </div>

        )}
        

            
        </div>
        </div>   
    )
}

export default Home
