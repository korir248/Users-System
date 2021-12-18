import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
// import { Link } from 'react-router-dom'
// import moment from 'moment'



const Project = () => {
    const {projects} = useSelector(state => state.project)
    const {tasks} = useSelector(state => state.task)
    const {id}= useParams()

    const project = projects.find(project=>project.id === parseInt(id))
    console.log(project);
    const spTasks = tasks.find(task=> task.project_id  === 4)
    console.log(spTasks);

    return (
        <div className="admin">
        
        <>
         <thead>{project.project_name}</thead>
        </>
        <p>Tasks</p>
            
            
        </div>
    )
}

export default Project
