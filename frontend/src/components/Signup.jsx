import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux"
import { createUser } from "../redux/actions/userActions";


const Signup = ()=>{
    const [formData, setFormData] = useState({});

    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})

    }

    const dispatch = useDispatch()

    const registerUser = (data)=>{
        dispatch(createUser(data))
    }



    return (
        <div className="form">
            <div className="signup-form">
                <form>    
                    <p>Signup Form</p>                
                    <input name="fullname" placeholder="Enter Fullname" required onChange={handleChange}></input>
                    <input name="username" placeholder="Enter Username" required onChange={handleChange}></input>
                    <input name="email" placeholder="Enter Email" required onChange={handleChange}></input>
                    <input type="password" name="password"  placeholder="Enter Password" required onChange={handleChange}></input>
                    <input type="password" placeholder="Enter Confirm Password" required ></input>
                    <button className="btn-submit" type="submit" value="Submit" onSubmit={()=> registerUser(formData)} >Submit</button>
                    <i>Already have an account? <Link to="/login">Log in</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i>
                </form>
            </div>
    
        </div>
    )

}


export default Signup;