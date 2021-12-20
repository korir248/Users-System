import {CREATE_TASK_FAILED, CREATE_TASK_SUCCESS, GET_TASKS_FAILED, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "../types"
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
        console.log(data.tasks);
        
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
                'Authorization': token,
                id : id
            }
        }
        
        // console.log(token);
        const {data} = await axios.delete("http://localhost:3002/admin/tasks",config)
        console.log(data);

        dispatch(getTasks())        

        
    } catch (error) {
        console.log(error.message)
        
    }
    
}

export const createTask = (task_name,id)=> async(dispatch)=>{
    // const {projects} = useSelector(state => state.project)

    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
            }

        }
        
        const { data} = await axios.post("http://localhost:3002/admin/tasks",{task_name,id},config)
        console.log(data);
        
        dispatch({
            type: CREATE_TASK_SUCCESS,
            payload: data
        })
        dispatch(getTasks())
        
    } catch (error) {
        dispatch({
            type: CREATE_TASK_FAILED,
            payload: error.messsage
        })
        
    }
}

export const assignTask = (task_id,user_id)=> async(dispatch)=>{
    try {
        console.log(task_id,user_id);
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
            }

        }

        const {data} = await axios.put("http://localhost:3002/admin/tasks",{task_id,user_id},config)
        console.log(data);

        dispatch(getTasks())
        
    } catch (error) {
        console.log(error.message);
        
    }

}

export const unAssignTask = (task_id)=> async(dispatch)=>{
    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
            }

        }

        const { data } = await axios.put("http://localhost:3002/admin/tasks/unassign",{task_id},config)
        console.log(data);

        dispatch(getTasks())
        
    } catch (error) {
        console.log(error.message);
        
    }
}