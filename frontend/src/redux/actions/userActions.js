import { LOGIN_FAIL,LOGIN_SUCCESS,LOGIN_STATUS,SIGNUP_FAIL,SIGNUP_STATUS,SIGNUP_SUCCESS} from '../types'
import axios from "axios"

export const createUser = (user)=> async(dispatch)=>{

    try {
        dispatch({
            type: SIGNUP_STATUS
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }

        }
        const { data} = await axios.post("http://localhost:3001/register",user,config)
        console.log(data);
        
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log(error.message);

        dispatch({
            type: SIGNUP_FAIL,
            payload: error.message
        })
        
    }
    
}

export const loginUser = (user)=> async(dispatch)=>{
    try {
        dispatch({
            type: LOGIN_STATUS
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }

        }

        const {data} = await axios.post("http://localhost:3001/login",user,config)
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error.message);

        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
        
    }
}