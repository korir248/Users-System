import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  moment  from 'moment'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { Checkbox } from '@mui/material'
import { getProjects } from '../../redux/actions/projectActions'


const Projects = () => {
    const {projects,error} = useSelector(state => state.project)

    const dispatch = useDispatch()
    // console.log(projects);
    const deletingProject = ()=>{

    }
    useEffect(() => {
        dispatch(getProjects())
        
    }, [dispatch])

    
    return (
        <div className="admin"> 
            <p>Projects</p>
            {error ? 
            <p>{error}</p>
            : 
            <>
            {/* {projects.map(project=> {
                return (
                    <div key={project.id} className="single-project">
                        <p>{project.project_name}</p>
                        <p>{moment(project.date_created).format('dddd Do MMMM YYYY')}</p>
                        <p>Completed: {project.isCompleted.toString()}</p>                   
                    </div>
                )
            }
            )}        */}
            <thead>
                <td>Project Name</td>
                <td>Date Created</td>
                <td>Status</td>
                <td></td>
                <td></td>
            </thead>
            {projects.map(project=>{
                return (
                <tr key={project.id}>
                <td><Link to={`/admin/projects/${project.id}`}></Link>{project.project_name}</td>
                <td>{moment(project.date_created).format('dddd Do MMMM YYYY')}</td>
                <td>{project.isCompleted ? "Completed" : "OnGoing"}</td>
                <td><DeleteIcon className="delete-btn" onClick={()=> deletingProject(project.id)}/> </td>
                <td><Checkbox/></td>
                </tr>
                
                )
            })}
            </>}
        
            
        </div>
    )
}

export default Projects
