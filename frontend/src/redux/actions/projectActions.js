import { GET_PROJECTS_FAILED, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS } from "../types";
import axios from "axios";
import { getTasks } from "./taskActions";
import { getUsers } from "./userActions";

export const getProjects = ()=> async(dispatch)=>{
    try {
        dispatch({
            type: GET_PROJECTS_REQUEST
        })
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }

        }
    
        const {data} = await axios.get("http://localhost:3002/admin/projects",config)
        console.log(data);
        
        dispatch({
            type: GET_PROJECTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: GET_PROJECTS_FAILED,
            payload: error.message
        })
        
    }

}

export const deleteProject = (id)=> async(dispatch)=>{
    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
                id: id
            }

        }
        await axios.delete("http://localhost:3002/admin/projects",config)

        dispatch(getProjects())
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export const undo = ()=> async(dispatch)=>{
    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
            }
        }

        await axios.put("http://localhost:3002/admin/projects",{},config)

        dispatch(getTasks())
        dispatch(getUsers())
        dispatch(getProjects())

        
    } catch (error) {
        console.log(error.message);
        
    }
}