import { LOGIN_FAIL,LOGIN_SUCCESS,LOGIN_REQUEST,SIGNUP_FAIL,SIGNUP_STATUS,SIGNUP_SUCCESS, LOG_OUT, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED} from '../types'
import axios from "axios"
import { toast } from 'react-toastify'

export const createUser = (user)=> async(dispatch)=>{
    const {username, fullname,email,password,cpassword,phonenumber} = user
    if(password !== cpassword) toast.error("Both passwords must match")


    try {
        dispatch({
            type: SIGNUP_STATUS
        })

        
        const config = {
            headers: {
                'Content-type': 'application/json'
            }

        }
        const {data} = await axios.post("http://localhost:3001/register",{username, fullname,email,phonenumber,password,cpassword},config)
        console.log(data);
        
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: {
                message: "Signup was successful",
                data: data
            }})
        toast.success("Signup was successful")
        
    } catch (error) {
        console.log(error);
        toast.error("An error occured when registering!")
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.message,
            message: "An error occured when registering!"
        })
        
    }
    
}

export const loginUser = (user)=> async(dispatch)=>{

    const { username,password} = user
    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }

        }

        const {data} = await axios.post("http://localhost:3001/login",{username,password},config)
        console.log(data)
        localStorage.setItem('token',data.token)
        sessionStorage.setItem('user',JSON.stringify(data.user))

        toast.success(data.message)

        setTimeout(() => {            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.user
            })
        }, 500);

        

    } catch (error) {
        console.log(error.message);

        toast.error("Error occured during log in!")

        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
            message: "Error occured during log in!"
        })
        
    }
}

export const logOut = ()=>async(dispatch)=>{
    sessionStorage.clear()
        dispatch({
            type: LOG_OUT
        })
}

export const getUsers = ()=> async(dispatch)=>{
    try {
        dispatch({
            type: GET_USERS_REQUEST
        })
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }

        }


        const {data} = await axios.get("http://localhost:3001/users",config)

        console.log(data);
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log(error.message);

        dispatch({
            type : GET_USERS_FAILED,
            payload: error.message
        })
        
    }
}

export const deleteUser = (email)=> async(dispatch)=>{
    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
                email: email
            }

        }

        const {data} = await axios.delete("http://localhost:3001/admin/users",config)
        console.log(data);

        dispatch(getUsers())
        
    } catch (error) {
        console.log(error.message)        
    }
}