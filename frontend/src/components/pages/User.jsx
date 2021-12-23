import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


const User = () => {
    const {users} = useSelector(state => state.user)
    const {id}= useParams()
    const {tasks} = useSelector(state => state.task)
    const specTasks  =  tasks.filter(task=> task.email === user.email)

    const user = users.find(user=>user.id === parseInt(id))
    console.log(user);

    return (
        <div className="admin">
        <h4> Details for {user.fullname}</h4>
        {/* {user.map(user=>( */}
            <div>
            <p>{user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>{user.password}</p>          


            </div>
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
            <p>{user.fullname} hasn't been assigned any task!</p>
            </>
        {/* ))} */}
        </div>
    )
}

export default User
