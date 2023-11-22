import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import '../Style.css'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static"  sx={{ backgroundColor: '#5f44a3' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee
        </Typography>
        <Button ><Link style={{color:'whitesmoke', textDecoration:"none"}} to ={'/home'}> Home</Link></Button>
        
        <Button ><Link style={{color:'whitesmoke' , textDecoration:"none"}} to ={'/'}>Logout</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
