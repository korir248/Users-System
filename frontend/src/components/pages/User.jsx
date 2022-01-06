import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


const User = () => {
    const {users} = useSelector(state => state.user)
    const {tasks} = useSelector(state => state.task)

    const {id}= useParams()
    const specTasks  =  tasks.filter(task=> task.email === user.email)

    const user = users.find(user=>user.id === parseInt(id))

    return (
        <div className="admin">
        <h4> Details for {user.fullname}</h4>
            <div>
            <p>Fullname: {user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>{user.password}</p>        


            </div>
            {specTasks.length ? 
        <>
        <p>
        {user.fullname}is currently working on the following {specTasks.length === 1 ? 'task' : 'tasks'}:
        </p>
            <table>
            <thead>
                <tr>
                    {/* <td>#</td> */}
                    <td>Task</td>
                    <td>Project</td>
                    <td>isCompleted</td>
                    {/* <td>Status</td> */}
                    <td></td>
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
                <td>{task.isCompleted ? "Yes" : "Pending"}</td> 
                 </tr>
        )
        )}
        </tbody>
        </table>
        </>
            : 
            <>
            <p>{user.fullname} hasn't been assigned a task yet!</p>
            </>}
        </div>
    )
}

export default User
