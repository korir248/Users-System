import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import { deleteTask, getTasks } from '../../redux/actions/taskActions'
import CreateTask from '../mini components/CreateTask'

const Tasks = () => {

    const { tasks} = useSelector(state => state.task)
    const dispatch = useDispatch()

    const deletingTask = (id)=>{
        console.log("deleting...");
        dispatch(deleteTask(id))
    }
    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch, tasks])

    return (
        <div className="admin">
            <p>Tasks</p>
            <CreateTask/>
            {tasks.length ? 
            <>
            <table>
            <thead>
                <tr>
                    <td>Task Name</td>
                    <td>Project</td>
                    <td>isAssigned</td>
                    <td>Status</td>
                    <td></td>
                    <td></td>
                </tr>

            </thead>
            <tbody>
            {tasks.map(task=> (
                <tr>
                <td>{task.task_name}</td>
                <td>{task.project_name}</td>
                <td>{task.isAssigned.toString()}</td>
                <td>{task.isCompleted ? "Completed" : "OnGoing"}</td>
                <td><DeleteIcon onclick={()=> deletingTask(task.id)}/> </td>
                <td><Checkbox /></td>
                </tr>
        )
        )}
        </tbody>
        </table>
            </>
            : <p>No Tasks!</p>}
        </div>
    )
}

export default Tasks
