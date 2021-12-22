import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import { createUser } from "../../redux/actions/userActions";


const Signup = ()=>{
    const [formData, setFormData] = useState({});

    const {loading} = useSelector(state => state.user)

    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})

    }

    const dispatch = useDispatch()

    const registerUser = (e)=>{
        e.preventDefault()
        dispatch(createUser(formData))
    }

    return (
        <div className="form">
            <div className="signup-form">
                <form onSubmit={(e)=> registerUser(e)}>    
                    <p>Signup Form</p>                
                    <input name="fullname" placeholder="Enter Fullname" required onChange={handleChange}></input>
                    <input name="username" placeholder="Enter Username" required onChange={handleChange}></input>
                    <input name="email" placeholder="Enter Email" required onChange={handleChange}></input>
                    <input type="password" name="password"  placeholder="Enter Password" required onChange={handleChange}></input>
                    <input type="password" name="cpassword" placeholder="Enter Confirm Password" required onChange={handleChange}></input>
                    <button className="btn-submit" type="submit" value="Submit" > {loading ? "Signing up..." : "Submit"}</button>
                    {/* {error ? <h4 className="error-msg">{error}!!!</h4> : ""} */}
                    <i>Already have an account? <Link to="/login">Log in</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i>
                </form>
            </div>
    
        </div>
    )

}


export default Signup;