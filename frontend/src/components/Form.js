
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
export default function form() {
  return (
    <div className="App">
    
      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
      <form>
        <TextField
          style={{ width: "400px", margin: "10px" }}
          type="text"
          label="setgoal"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="goal description"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "50px", margin: "5px" }}
          type="text"
          label="Diversity catagory"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Attribute"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="goal stage"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="job id"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="job region"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </div>
  );
}
