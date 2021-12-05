import React,{ } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logOut } from '../redux/actions/userActions'
const Home = ()=> {   

    const {user} = useSelector(state => state.user)
    
    const dispatch = useDispatch()

    const loggingOut = ()=>{
        dispatch(logOut())
    }
    return (
        <div className="admin">
        <div className="homepage">
        
        <p>Welcome { user ? user.username : "Home"}!</p>
        {user.username ? (
            <div>
                <Link to="/">
                    <button onClick={()=>loggingOut()}>Log Out</button>
                </Link>
            </div>
        ): (
            <div>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
        </div>

        )}
            
        </div>
        </div>   
    )
}

export default Home
