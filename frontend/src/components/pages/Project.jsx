import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { deleteTask, getTasks } from '../../redux/actions/taskActions'
import AssignTask from '../mini components/AssignTask'
import { Button,} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UnAssignTask from '../mini components/UnAssignTask'
import { red } from '@mui/material/colors'
// import { Link } from 'react-router-dom'
// import moment from 'moment'




const Project = () => {
    const {projects} = useSelector(state => state.project)
    const {tasks} = useSelector(state => state.task)
    const {id}= useParams()
    const dispatch = useDispatch()

    const project = projects.find(project=>project.id === parseInt(id))

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const specificTasks = tasks.filter(task=> task.project_id === parseInt(id))

    const deletingTask = (id)=>{
        dispatch(deleteTask(id))
    }
    return (
        <div className="admin">
        <>
         <thead>{project.project_name}</thead>
        </>
        <p className='title'>Tasks</p>
        {specificTasks.length ? 
            <>
            <table>
            <thead>
                <tr>
                    <td>Task</td>
                    <td>Assigned To</td>
                    <td>Status</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </thead>
            <tbody>
            {specificTasks.map(task=> (
                <tr key={task.id}>
                <td >{task.task_name}</td>
                <td>{task.email ? task.email : "unassigned"}</td>
                <td>{task.isCompleted ? "Completed" : "OnGoing"}</td>
                <td>{!task.isAssigned ? <DeleteIcon sx={{ color: red[500] }} className="delete-btn" onClick={()=> deletingTask(task.id)}/> : 
                    <DeleteIcon sx={{ color: red[500] }} disabled/> }</td>
                {/* <td><Checkbox /></td> */}
                <td>{!task.isAssigned ? <AssignTask task_id={task.id} /> : <UnAssignTask task_id={task.id}/>}</td>
                </tr>
        )
        )}
        </tbody>
        </table>
            </>
            : <p>No Tasks!</p>}
            
            
         <tbody>

         <Link to={`/admin/projects`}>
            <Button variant='contained'>BACK</Button>
        </Link>
         </tbody>
        </div>
    )
}

export default Project
