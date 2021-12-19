import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  moment  from 'moment'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
// import { Checkbox } from '@mui/material'
import { deleteProject, getProjects } from '../../redux/actions/projectActions'
import { Button } from '@mui/material'


const Projects = () => {
    const {projects,error} = useSelector(state => state.project)

    const dispatch = useDispatch()
    // console.log(projects);
    const deletingProject = (id)=>{
        dispatch(deleteProject(id))

    }
    useEffect(() => {
        dispatch(getProjects())
        
    }, [dispatch])

    
    return (
        <div className="admin"> 
            <p className="title">Projects</p>
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
            {/* <tr> */}
                <td>Project Name</td>
                <td>Date Created</td>
                <td>Status</td>
                <td></td>
                {/* <td></td> */}
                <td></td>
            {/* </tr> */}
            </thead>
            {projects.map(project=>{
                return (
                <tr key={project.id}>
                <td>{project.project_name}</td>
                <td>{moment(project.date_created).format('dddd Do MMMM YYYY')}</td>
                <td>{project.isCompleted ? "Completed" : "OnGoing"}</td>
                <td><DeleteIcon className="delete-btn" onClick={()=> deletingProject(project.id)}/> </td>
                {/* <td><Checkbox/></td> */}
                <td><Link to={`/admin/projects/${project.id}`}><Button variant='contained' size='small'>VIEW TASKS</Button></Link></td>
                </tr>
                
                )
            })}
            </>}
        
            
        </div>
    )
}

export default Projects
