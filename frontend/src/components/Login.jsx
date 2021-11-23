import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'

const Login = ()=> {

    const dispatch = useDispatch()

    
    const [formData, setFormData] = useState({})
    
    
    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})
        
    }
    const loggingInUser = (user)=>{
        dispatch(loginUser(user))
    }
    return (
        <div>
        <p>Login Page</p>
        <div className="login-form">
            <label for="uname">Username</label>
            <input name="username" placeholder="Enter Username" onChange={handleChange} required/>

            <label for="psw">Password</label>
            <input name="password" type="password" placeholder="Enter Password" onChange={handleChange} required/>

            <button className="btn-submit" type="submit" onSubmit={()=> loggingInUser(formData)}>Login</button>
            <i>Don't have an account? <Link to="/register">Sign up now!</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i>
        </div>
    </div>
  
    )
}

export default Login

