import { LOGIN_FAIL, LOGIN_STATUS, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_STATUS, SIGNUP_SUCCESS } from "../types";

const initialState = {
    loading: false,
    error: ""

}

const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_STATUS:
            return   {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state

            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload

            }
            case SIGNUP_STATUS:
                return {
                    ...state,
                    loading: true
                }
        case SIGNUP_SUCCESS:
            console.log("Signup succesful!");
            return {
                ...state

            }
        case SIGNUP_FAIL:
            console.log("Signup failed!");
            return {
                ...state,
                error: action.payload

            }
        default:
            break;
    }
}

export default userReducer