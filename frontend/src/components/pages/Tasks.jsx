import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import { completeTask, deleteTask, getTasks} from '../../redux/actions/taskActions'
import CreateTask from '../mini components/CreateTask'
import AssignTask from '../mini components/AssignTask'
import UnAssignTask from '../mini components/UnAssignTask'
import { FormControlLabel } from '@mui/material'
import { red } from '@mui/material/colors'

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

    const handleChange = (e)=>{
        if(e.target.checked) dispatch(completeTask(e.target.value))

    }

    return (
        <div className="admin">
            <p className="title">Tasks</p>
            <div st><CreateTask/></div>
            {tasks.length ? 
            <>
            <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Task</td>
                    <td>Project</td>
                    <td>isAssigned</td>
                    <td>Status</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </thead>
            <hr/>
            <tbody>
            {tasks.map((task,index)=> (
                <tr key={task.id}>
                <td>{index +1}</td>
                <td>{task.task_name}</td>
                <td>{task.project_name}</td>
                <td>{task.isAssigned.toString()}</td>
                <td>{task.isCompleted ? "Completed" : "OnGoing"}</td>
                <td>{!task.isAssigned ? <DeleteIcon sx={{ color: red[500] }} className="delete-btn" onClick={()=> deletingTask(task.id)}/> : 
                    <DeleteIcon sx={{ color: red[500] }} disabled/> }</td>
                <td>{!task.isCompleted ? <FormControlLabel control={ <Checkbox onChange={handleChange} value={task.id}/>}color='success' label="Complete"/>: "Complete"}</td>
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
