import React from 'react'
import { useSelector } from 'react-redux'

const Projects = () => {
    const {projects,error} = useSelector(state => state.project)
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
                        <p>{project.date_created}</p>
                        <p>{project.project_name}</p>
                        <p>{project.isCompleted}</p>                   
                    </div>
                )
            }
            )}       
            </>}
        
            
        </div>
    )
}

export default Projects
