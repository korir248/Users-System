import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import { deleteTask, getTasks} from '../../redux/actions/taskActions'
import CreateTask from '../mini components/CreateTask'
import AssignTask from '../mini components/AssignTask'
import UnAssignTask from '../mini components/UnAssignTask'

const Tasks = () => {
    // const [checked, setChecked] = useState(0)
    const { tasks} = useSelector(state => state.task)
    const dispatch = useDispatch()

    const deletingTask = (id)=>{
        dispatch(deleteTask(id))
    }
    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const handleChange = ()=>{
        console.log(1)

    }

    return (
        <div className="admin">
            <p className="title">Tasks</p>
            <CreateTask/>
            {tasks.length ? 
            <>
            <table>
            <thead>
                <tr>
                    <td>Task</td>
                    <td>Project</td>
                    <td>isAssigned</td>
                    <td>Status</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </thead>
            <tbody>
            {tasks.map(task=> (
                <tr key={task.id}>
                <td>{task.task_name}</td>
                <td>{task.project_name}</td>
                <td>{task.isAssigned.toString()}</td>
                <td>{task.isCompleted ? "Completed" : "OnGoing"}</td>
                <td><DeleteIcon className="delete-btn" onClick={()=> deletingTask(task.id)}/> </td>
                <td><Checkbox onChange={handleChange}/></td>
                <td>{!task.isAssigned ? <AssignTask task_id={task.id} project_id={task.project_id}/> : <UnAssignTask task_id={task.id}/>}</td>
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
