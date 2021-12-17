import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import moment from 'moment'



const Project = () => {
    const {projects} = useSelector(state => state.project)
    const {tasks} = useSelector(state => state.task)
    const {id}= useParams()

    const project = projects.find(project=>project.id === parseInt(id))
    const specTasks = tasks.filter(task=> task.project_id === id)

    return (
        <div className="admin">
        
        <>
         <p>{project.project_name}</p>
        </>
        {/* <p>Tasks</p>
        {specTasks.map(task=>(
            <p>{task.task_name}</p>
        ))} */}
                
            
        </div>
    )
}

export default Project
