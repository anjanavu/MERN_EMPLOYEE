import React, { useEffect, useState } from 'react';
import '../Style.css'; 
import { Card, CardContent, Grid, Typography } from '@mui/material';
import axiosInstance from '../axiosintercepter';
const Home = () => {
  const [cardData,setData]=useState([]);
  useEffect(() => {
    axiosInstance.get('/admin')
      .then((res) => {
        setData(res.data); 
        console.log(res.data);
      })

  }, []); 

  return (
    <div style={{margin:"3%"}}>
    <Grid container spacing={2}>
        {cardData.map((val,i)=>(
        <Grid item key={i}xs={12} sm={6} md={4}>
   <Card sx={{ maxWidth: 345 }}>

  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {val.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">{val.designation}
    </Typography>
    <Typography variant="body2" color="text.secondary">{val.salary}
    </Typography>
  </CardContent>

  </Card>
  </Grid>
  ))}
  </Grid>
  </div>
  );

};

export default Home;
