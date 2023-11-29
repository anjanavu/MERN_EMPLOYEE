import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import axiosInstance from '../axiosintercepter';
import React, { useEffect, useState } from 'react'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import '../Style.css'
import Employee from './Employee';

const View = () => {
  const [cardData,setData]=useState([]);
  var[update,setUpdate] = useState(false);
  var[singleValue,setSingleValue]=useState([])

  useEffect(() => {
    axiosInstance.get('/admin')
      .then((res) => {
        setData(res.data); 
        console.log(res.data);
      })

  }, []); 
  const updateBlog = (val)=>{
    console.log("update clicked",val);
    setUpdate(true);
    setSingleValue(val)
  }

  function remove(id) {
    axiosInstance.delete(`/admin/delete/${id}`)
      .then((res) => {
        alert(res.data);
        window.location.reload(false);
        
      })
  }
  
  let finalJSX= (
    <div>
       <TableContainer component={Paper} sx={{ width: '80%', margin: '5%' }}>
    <Table  className="table-style" sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead className="table-head">
        <TableRow>
          <TableCell align='center'>Name</TableCell>
          <TableCell align="center">Designation</TableCell>
          <TableCell align="center">Location</TableCell>
          <TableCell align="center">Salary</TableCell>
          <TableCell align="center">Update</TableCell>
          <TableCell align="center">Delete</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {
        cardData.map((val,i)=>(
          <TableRow key={i}>
            <TableCell align='center'sx={{ border: '1px solid #dddddd' }}>{val.name}</TableCell>
            <TableCell align='center'sx={{ border: '1px solid #dddddd' }}>{val.designation}</TableCell>
            <TableCell align='center'sx={{ border: '1px solid #dddddd' }}>{val.location}</TableCell>
            <TableCell align='center'sx={{ border: '1px solid #dddddd' }}>{val.salary}</TableCell>
            <TableCell align='center'sx={{ border: '1px solid #dddddd' }}>
                  <IconButton color="primary"onClick={()=>updateBlog(val)} >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align='center'sx={{ border: '1px solid #dddddd' }}>
                  <IconButton color="secondary"onClick={() => remove(val._id)} >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
          </TableRow>
        ))
        
        
        }
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
  if(update) finalJSX=<Employee method="put" data={singleValue}/>
  return (
   
     
      finalJSX
      
    
     )
}

export default View
