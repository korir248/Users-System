import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { MenuItem, Select } from '@mui/material';
import { createTask } from '../../redux/actions/taskActions';


const CreateTask = () => {
    const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
    const {projects} = useSelector(state => state.project)


    const [formData, setFormData] = useState({})


	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();		 
		setOpen(false);

		const {id} = projects.find(project=> project.project_name === formData.project_name)
		
		dispatch(createTask(formData.task_name,id))

	};

	// const handleChange = (e)=>{
	// 	setProject(e.target.value)

	// }
	const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})
        
    }

    return (
        <div>
            <div>
			<Button variant='contained'  sx={{backgroundColor: 'green' ,color: 'white'}} onClick={handleClickOpen}>
				CREATE TASK
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Create Task</DialogTitle>
				<Box component='form' onSubmit={handleSubmit} noValidate>
					<DialogContent>
						<label>Task</label>
						<TextField  label="Task" variant='outlined' fullWidth margin='normal' required name='task_name' onChange={handleChange}/>
						<label>Project Name</label>
                        <Select label="Project Name" name="project_name" onChange={handleChange} fullWidth placeholder="Project Name" >
                        {projects.map(project=>(

                            <MenuItem key={project.id} value={project.project_name}>{project.project_name}</MenuItem>
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

export default CreateTask
