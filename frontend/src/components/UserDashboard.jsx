import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, submitTask } from '../redux/actions/taskActions'


const UserDashboard = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
    const {tasks} = useSelector(state => state.task)
    const specTasks  =  tasks.filter(task=> task.email === user.email)
    console.log("tasks: ",tasks);
    console.log("spec",specTasks);
    useEffect(() => {

        dispatch(getTasks())
        
    }, [dispatch])

    const handleChange = (e)=>{
        if(e.target.checked) dispatch(submitTask(e.target.value))

    }

    return (
        <div className="user-dashboard">
        <p style={{fontWeight: 'bold',fontSize: '23px'}}>
        Hello {user.username}
        </p>
        {specTasks.length ? 
        <>
        <p>
            You are currently working on the following {specTasks.length === 1 ? 'task' : 'tasks'}:
        </p>
            <table>
            <thead>
                <tr>
                    {/* <td>#</td> */}
                    <td>Task</td>
                    <td>Project</td>
                    <td>isSubmitted</td>
                    <td>Status</td>
                    {/* <td></td> */}
                    {/* <td></td> */}
                    {/* <td></td> */}
                </tr>

            </thead>
            <hr/>
            <tbody>
            {specTasks.map((task,index)=> (
                <tr key={task.id}>
                {/* <td>{index +1}</td> */}
                <td>{task.task_name}</td>
                <td>{task.project_name}</td>
                {/* <td>{task.isAssigned.toString()}</td> */}
                <td>{task.isCompleted ? "Yes" : "Not Yet"}</td> 
                 {/* <td>{!task.isAssigned ? <DeleteIcon sx={{ color: red[500] }} className="delete-btn" onClick={()=> deletingTask(task.id)}/> : 
                    <DeleteIcon sx={{ color: red[500] }} disabled/> }</td> */}
                <td>{!task.isSubmitted ? <FormControlLabel control={ <Checkbox onChange={handleChange} value={task.id}/>} label="Submit"/>: "Submitted"}</td> 
                {/* <td>{!task.isAssigned ? <AssignTask task_id={task.id} project_id={task.project_id}/> : <UnAssignTask task_id={task.id}/>}</td> */}
                </tr>
        )
        )}
        </tbody>
        </table>
        </>
            : 
            <>
            <p>You haven't been assigned a task yet!</p>
            <p>A task will be assigned to you shortly!</p>
            </>}
            
        </div>
    )
}

export default UserDashboard
