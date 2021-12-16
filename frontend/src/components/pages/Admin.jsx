import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions/userActions'
import { getProjects } from '../../redux/actions/projectActions'
import { getTasks } from '../../redux/actions/taskActions'

const Admin = () => {
    const {users,user,error} = useSelector(state => state.user)
    const {projects} = useSelector(state => state.project)
    const dispatch = useDispatch()
        
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProjects())
        dispatch(getTasks())

    },[])

    const completedProjects = projects.filter(project=> project.isCompleted === true)
    

    return (
        
        <div className="admin">
        
            {user.isAdmin ? (
            <>
                <p > Welcome to the Admin Panel</p>
            <div className="dashboard-admin">
                
                <div className="dashboard-item">
                    Number of Users: {users.length}
                </div>
                <div className="dashboard-item">
                    Number of Projects: {projects.length}
                </div>
                <div className="dashboard-item">
                    Completed Projects:  {completedProjects.length}
                </div>

            
            </div>
            </>
            ) : <>
            <p className="error-msg">Error: Not Authorised</p>
            <i>{error}</i>
            </>
            }
        </div>
    )
}

export default Admin
