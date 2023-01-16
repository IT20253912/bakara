import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'
import PopupModel from '../PopupModel';




// function createData(OrganizationName, RegNo, Address, View) {
//     return { name, calories, fat, carbs, protein };
//   }



 const Tabletest = ({rows}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setid] = useState("")  
    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];
    console.log(rows);
  return (

   <div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Organization Name</TableCell>
            <TableCell align="center">Reg No</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">View</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.org_name}
              </TableCell>
              <TableCell align="center">{row.org_reg_no}</TableCell>
              <TableCell align="center">{row.org_address.add_no +', '+row.org_address.add_line1+', '+row.org_address.add_line2+', '+row.org_address.city}</TableCell>
              <TableCell align="center">
                <div>
                  <button className="viewbutton" onClick={()=>{handleOpen();
                  setid(row._id)
                  }} >view</button>
                </div>
              </TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <PopupModel open = {open} id={id}/>
</div>
   
  )
}


export default Tabletest;

