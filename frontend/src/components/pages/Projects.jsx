import React from 'react'
import { useSelector } from 'react-redux'
import  moment  from 'moment'

const Projects = () => {
    const {projects,error} = useSelector(state => state.project)

    console.log(projects);
    return (
        <div className="admin"> 
            <p>Projects</p>
            {error ? 
            <p>{error}</p>
            : 
            <>
            {projects.map(project=> {
                return (
                    <div key={project.id} className="single-project">
                        <p>{moment(project.date_created).format('dddd Do MMMM YYYY')}</p>
                        <p>{project.project_name}</p>
                        <p>Completed: {project.isCompleted.toString()}</p>                   
                    </div>
                )
            }
            )}       
            </>}
        
            
        </div>
    )
}

export default Projects
