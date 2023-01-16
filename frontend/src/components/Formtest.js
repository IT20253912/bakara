import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
    Typography,
    AppBar,
    Toolbar,
   
    Button
  } from "@material-ui/core";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        
        
      }}
      noValidate
      autoComplete="off"
    >




  
   
      <div >
        <TextField
          required
          fullWidth
          id="fullWidth"
          label="Organization Name"
          defaultValue="Hello World"
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Reg No"
          defaultValue="Hello World"
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="AddressLine 1"
          defaultValue="Hello World"
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="AddressLine2"
          defaultValue="Hello World"
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue="Hello World"
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="type"
          defaultValue="Hello World"
        />
        
        <TextField
          required
          id="outlined-required"
          label="Number"
          defaultValue="Hello World"
        />
        <br/>

        <Button variant="outlined">CANCEL</Button>
        <Button variant="contained" color="primary">
          UPDATE
        </Button>
  

      </div>
   
     
    </Box>
  );
}
