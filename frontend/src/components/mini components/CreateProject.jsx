import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
// import { MenuItem, Select } from '@mui/material';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import moment from 'moment';
import { createProject } from '../../redux/actions/projectActions';

const CreateProject = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({})
    
    
    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]: e.target.value})
        
    }

    const handleClickOpen = () => {
		setOpen(true);
	};


	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();		 
		setOpen(false);
        const createdate = moment().format()
        dispatch(createProject(formData.projectname,createdate,formData.duedate))

    };

    return (
        <div>

        <div>
			<Button variant='contained' sx={{backgroundColor: 'green' ,color: 'white'}} onClick={handleClickOpen}>
				CREATE PROJECT
			</Button>
			<Dialog open={open} onClose={handleClose}>
				{/* <DialogTitle>Create Task</DialogTitle> */}
				<Box component='form' onSubmit={handleSubmit} noValidate>
					<DialogContent>
                    <div style={{ width:'500px', marginTop:'20px', margin:'auto', backgroundColor:'white'}}>
                        <h1 > Add a New Project </h1>
                        <div  >
                            <label for="formGroupExampleInput" >Project Name</label>
                            <input type="text" name="projectname" placeholder="Enter project name" onChange={handleChange} required/>
                        </div>

                        <div>
                            <label for="formGroupExampleInput" class="form-label">Due Date</label>
                            <input type="date" name="duedate" placeholder="Enter project duedate" onChange={handleChange} required/>
                        </div>
                 </div>
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

export default CreateProject
