import { LOGIN_FAIL,LOGIN_SUCCESS,LOGIN_REQUEST,SIGNUP_FAIL,SIGNUP_STATUS,SIGNUP_SUCCESS, LOG_OUT, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED} from '../types'
import axios from "axios"

export const createUser = (user)=> async(dispatch)=>{
    const {username, fullname,email,password,cpassword} = user


    try {
        dispatch({
            type: SIGNUP_STATUS
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }

        }
        const data = await axios.post("http://localhost:3001/register",{username, fullname,email,password,cpassword},config)
        console.log(data);
        
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: {
                message: "Signup was successful",
                data: data}
        })
        
    } catch (error) {
        console.log(error.message);

        dispatch({
            type: SIGNUP_FAIL,
            payload: error.message,
            message: "Error Occured when registering!"
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

        setTimeout(() => {            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.user
            })
        }, 500);
        

    } catch (error) {
        console.log(error.message);

        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
            message: "Error occured during log in!"
        })
        
    }
}

export const logOut = ()=>{
    return {
        type: LOG_OUT
    }
}

export const showUsers = (user)=> async(dispatch)=>{
    const {username} = user
    try {
        dispatch({
            type: GET_USERS_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }

        }


        const {data} = await axios.get("http://localhost:3001/users",{username},config)

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