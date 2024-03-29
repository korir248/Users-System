import React,{ useState} from 'react'
import { Link ,Navigate} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../../redux/actions/userActions'
// import { toast } from 'react-toastify'
import moment from 'moment'

const Login = ()=> {

    const dispatch = useDispatch()
    const {user, loading} = useSelector(state => state.user)
    
    
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
    if (user.username) {
        
        if(user.isAdmin) return (
        <Navigate to={"/admin"}/>
        )

        return <Navigate to={"/"}/>
    }



    // console.log(formData)
    return (
        <div className="login">
        <div className="login-form">
        <p>Login Page</p>
        <form onSubmit={e=>loggingInUser(e)}>
            <label >Username</label>
            <input name="username" placeholder="Enter Username" onChange={handleChange} required/>

            <label >Password</label>
            <input name="password" type="password" placeholder="Enter Password" onChange={handleChange} required/>

            <button className="btn-submit" type="submit">{loading ? "Logging in..." : "Login"}</button>
            {/* {error ? <h4 className="error-msg">{error}!!!</h4> : ""} */}
            <i>Don't have an account? <Link to="/register">Sign up now!</Link></i><br/>
            <i><Link to="/">Cancel</Link></i>
                    
        </form>
        </div>
    </div>
  
    )
}

export default Login



