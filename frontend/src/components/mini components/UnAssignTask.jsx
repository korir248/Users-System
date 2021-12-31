import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { unAssignTask } from '../../redux/actions/taskActions'

const UnAssignTask = ({task_id}) => {
    const dispatch = useDispatch()

    const handleUnAssign = () => {
        dispatch(unAssignTask(task_id))
    }
    return (
        <div>
            <div>
            <Button className="assign-btn" sx={{backgroundColor: 'green' ,color: 'white'}} variant='contained' size="small" onClick={handleUnAssign}>
				UNASSIGN
			</Button>
            </div>
        </div>
    )
}

export default UnAssignTask
