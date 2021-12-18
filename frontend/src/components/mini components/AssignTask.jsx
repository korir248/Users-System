import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material'
import {  Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { assignTask } from '../../redux/actions/taskActions'
import { getUsers } from '../../redux/actions/userActions'


const AssignTask = () => {
    const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({})
    const {users} = useSelector(state => state.user)

    const handleClickOpen = () => {
		setOpen(true);
        dispatch(getUsers())
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();		 
		setOpen(false);
        console.log(formData.user_id);
        dispatch(assignTask())
    }
    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})
        
    }

    return (
        <div>
        <div>
			<Button className="assign-btn" variant='contained' size="small"  onClick={handleClickOpen}>
				ASSIGN
			</Button>
			<Dialog className="dialog" open={open} onClose={handleClose}>
				<DialogTitle>Select user to assign task to</DialogTitle>
				<Box component='form' onSubmit={handleSubmit} noValidate>
					<DialogContent>						
						<label>User</label>
                        <Select label="User Name" name="user_id" onChange={handleChange} fullWidth placeholder="user Name" >
                        {users.map(user=>(
                            <MenuItem key={user.id} value={user.id}>{user.email}</MenuItem>
                        ))}
                        </Select>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type='submit' onClick={handleSubmit} >Submit</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</div>
            
        </div>
    )
}

export default AssignTask
