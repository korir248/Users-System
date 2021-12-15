import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { MenuItem, Select } from '@mui/material';


const CreateTask = () => {
    // const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
    const {projects} = useSelector(state => state.project)


    const [project_name, setstate] = useState("")


	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();		 
		setOpen(false);
	};
    return (
        <div>
            <div>
			<Button variant='contained' sx={{ mt: 2 }} onClick={handleClickOpen}>
				CREATE TASK
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Fill the project Details below</DialogTitle>
				<Box component='form' onSubmit={handleSubmit} noValidate>
					<DialogContent>
						<TextField
							id='outlined-basic' label='Task Name' variant='outlined' fullWidth margin='normal' required name='taskName'
						/>
                        <Select label="Project Name" fullWidth margin="normal" required value={project_name}>

                        {projects.map(project=>(

                            <MenuItem>{project.project_name}</MenuItem>
                        ))}
                        </Select>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type='submit'>Submit</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</div>
        </div>
    )
}

export default CreateTask
