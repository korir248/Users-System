import { DELETE_TASK_FAILED, DELETE_TASK_SUCCESS, GET_TASKS_FAILED, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "../types"
import axios from 'axios'



export const getTasks = ()=> async(dispatch)=>{
    try {
        dispatch({
            type: GET_TASKS_REQUEST
        })
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }

        }
    
        const {data} = await axios.get("http://localhost:3002/admin/tasks",config)
        console.log(data);

        dispatch({
            type: GET_TASKS_SUCCESS,
            payload: data.tasks
        })
        
        
    } catch (error) {
        console.log(error.message);

        dispatch({
            type: GET_TASKS_FAILED,
            payload: error.message
        })
    }
}

export const deleteTask = (id)=> async(dispatch)=>{
    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }

        }
        const {data} = await axios.post("http://localhost:3002/admin/tasks",{id},config)

        dispatch({
            type: DELETE_TASK_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({
            type: DELETE_TASK_FAILED,
            payload: error.message
        })
        
    }

}