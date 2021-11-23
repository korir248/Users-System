import { LOGIN_FAIL, LOGIN_STATUS, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_STATUS, SIGNUP_SUCCESS } from "../types";

const initialState = {
    loading: false,
    error: "",
    message: ""

}

const userReducer = (state=initialState,{type,payload,message})=>{
    switch (type) {
        case LOGIN_STATUS:
            return   {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            console.log("Login successful!");
            return {
                ...state,
                loading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                message: message

            }
        case SIGNUP_STATUS:
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: message

            }
        case SIGNUP_FAIL:
            console.log("Signup failed!");
            return {
                ...state,
                loading: false,
                error: payload,
                message: message

            }
        default:
            return state;
    }
}

export default userReducer