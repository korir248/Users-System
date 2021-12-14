import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Tasks = () => {

    const { tasks} = useSelector(state => state.task)

    return (
        <div className="admin">
            <p>Tasks</p>
            {tasks.length ? 
            <>
            <table>
            <thead></thead>
            <tbody>
            {tasks.map(task=> (
                <tr>
                <Link to={`/admin/users/${task.id}`}>
                <td>{task.fullname}</td>
                <td>{task.email}</td>
                </Link>
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
