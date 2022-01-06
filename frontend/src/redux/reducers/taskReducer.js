import { GET_TASKS_FAILED, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "../types";


const initialState = {
    tasks: [],
    loading: false,
    error: ""

}

const taskReducer = (state = initialState, {type,payload})=>{
    switch (type) {
        case GET_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload,
                loading: false
            }
        case GET_TASKS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
    
        default:
            return state
    }
}

export default taskReducer