import { GET_PROJECTS_FAILED, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS } from "../types";
import axios from "axios";
import { getTasks } from "./taskActions";
import { getUsers } from "./userActions";
import { toast } from "react-toastify";

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
        dispatch({
            type: "ERROR_DELETE"
        })

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

export const createProject = (project_name,date_created,due_date)=> async(dispatch)=>{
    try {
        let token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        }
        const { data} = await axios.post("http://localhost:3002/admin/projects/create",{project_name,date_created,due_date},config)

        console.log(data);

        dispatch(getProjects())
        
    } catch (error) {
        console.log(error.message);
        toast.error("Could not Add Project")
        
    }
}