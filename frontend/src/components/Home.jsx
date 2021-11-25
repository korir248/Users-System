import React,{ } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logOut } from '../redux/actions/userActions'
import Header from './Header'

const Home = ()=> {   

    const {user} = useSelector(state => state.user)
    
    const dispatch = useDispatch()

    const loggingOut = ()=>{
        dispatch(logOut())
    }
    return (
        <>
        <Header/>
        <div className="homepage">
        
        <p>Welcome Home { user ? user.username : "Home"}!</p>
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
        </>   
    )
}

export default Home
