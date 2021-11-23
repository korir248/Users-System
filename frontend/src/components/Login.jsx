import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../redux/actions/userActions'

const Login = ()=> {

    const dispatch = useDispatch()
    const { loading, error} = useSelector(state => state.user)

    
    const [formData, setFormData] = useState({})
    
    
    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})
        
    }
    const loggingInUser = (e)=>{
        e.preventDefault()
        console.log("Logging in:", formData);
        dispatch(loginUser(formData))
    }


    console.log(formData)
    return (
        <div>
        <p>Login Page</p>
        <div className="login-form">
        <form onSubmit={e=>loggingInUser(e)}>
            <label >Username</label>
            <input name="username" placeholder="Enter Username" onChange={handleChange} required/>

            <label >Password</label>
            <input name="password" type="password" placeholder="Enter Password" onChange={handleChange} required/>

            <button className="btn-submit" type="submit">{loading ? "Logging in..." : "Login"}</button>
            {error ? <h4 className="error-msg">{error}!!!</h4> : ""}
            <i>Don't have an account? <Link to="/register">Sign up now!</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i>
        </form>
        </div>
    </div>
  
    )
}

export default Login

