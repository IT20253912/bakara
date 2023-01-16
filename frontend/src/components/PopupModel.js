import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import { FormControl } from '@material-ui/core';
import axios from 'axios'
import { async } from 'q';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  

  
const PopupModel = ({open,id}) => {
    //const [id, setid] = useState("")
    const getOrganizationDetails =async () =>{
       // setid(id);
       console.log(id);
        await axios.get(`api/organization?orgId=${id}`).then((res)=>{
            console.log(res.data);
        })
    }
    useEffect(() => {
        getOrganizationDetails();
    
    
    }, [])
    
   
 
  return (
    <div>

    
    <Modal
      open={open}
     
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <div >
        <FormControl fullWidth='true'>
      

        <TextField
         className='mb-4'
          required
          fullWidth
          id="fullWidth"
          label="Organization Name"
          
        />
       
        <TextField 
            className='mb-4'
          required
          id="outlined-required"
          label="Reg No"
          
        />
       
        <TextField
        className='mb-4'
          required
          id="outlined-required"
          label="AddressLine 1"
          
        />
        
        <TextField
        className='mb-4'
          required
          id="outlined-required"
          label="AddressLine2"
          
        />
       
        <TextField
        className='mb-4'
          required
          id="outlined-required"
          label="City"
          
        />
        
       
        <TextField
        className='mb-4'
          required
          id="outlined-required"
          label="type"
          
        />
        
        <TextField
        className='mb-4'
          required
          id="outlined-required"
          label="Number"
          
        />
        
        <div style={{ justifyContent:'right'} }>
        <Button variant="outlined">CANCEL</Button>
        <Button variant="contained" color="primary">
          UPDATE
        </Button>
        </div>
  
        </FormControl>
      </div>
      </Box>
    </Modal>
  </div>
  )
}

export default PopupModel