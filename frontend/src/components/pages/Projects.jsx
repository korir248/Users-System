import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  moment  from 'moment'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
// import { Checkbox } from '@mui/material'
import { deleteProject, getProjects } from '../../redux/actions/projectActions'
import { Button, Checkbox } from '@mui/material'
import CreateProject from '../mini components/CreateProject'
import { red } from '@mui/material/colors'

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
            <CreateProject/>
            {error ? 
            <p>{error}</p>
            : 
            <>
            <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Project Name</td>
                    <td>Date Created</td>
                    <td>Due Date</td>
                    <td>Status</td>
                    <td></td>
                    <td></td>
                    {/* <td></td> */}
                </tr>

            </thead>
            <tbody>
            {projects.map((project,index)=>{
                return (
                <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{project.project_name}</td>
                <td>{moment(project.date_created).format('dddd Do MMMM YYYY')}</td>
                <td>{moment(project.due_date).format('dddd Do MMMM YYYY')}</td>
                <td>{project.isCompleted ? "Completed" : "OnGoing"}</td>
                {/* <td><DeleteIcon sx={{ color: red[500] }} className="delete-btn" onClick={()=> deletingProject(project.id)}/> </td> */}
                <td>{project.isCompleted ? <DeleteIcon sx={{ color: red[500] }} className="delete-btn" onClick={()=> deletingProject(project.id)}/> : 
                    <DeleteIcon sx={{ color: red[500] }} disabled/> }</td>
                {/* <td><Checkbox/></td> */}
                <td><Link to={`/admin/projects/${project.id}`}><Button variant='contained' size='small'>VIEW TASKS</Button></Link></td>
                </tr>
                
                )
            })}
            </tbody>
            </table>
            </>}
        
            
        </div>
    )
}

export default Projects
