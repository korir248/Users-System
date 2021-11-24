import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_STATUS, SIGNUP_SUCCESS } from "../types";

const initialState = {
    user: {},
    loading: false,
    error: "",
    message: ""

}

const userReducer = (state=initialState,{type,payload,message})=>{
    switch (type) {
        case LOGIN_REQUEST:
            return   {
                ...state,
                loading: true,
                error: "",
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
                error: ""
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                message: message,
                user: {}

            }
        case SIGNUP_STATUS:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: message,
                error: ""

            }
        case SIGNUP_FAIL:
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