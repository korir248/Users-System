import React from 'react'
import { useSelector } from 'react-redux'
import momemt from 'moment'
import moment from 'moment'

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
                        <p>{moment(project.date_created).format('dddd Do MMMM YYYY')}</p>
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
