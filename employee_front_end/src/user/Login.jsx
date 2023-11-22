import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style.css'

const Login = () => {
    const [user,setUser]=useState({
      email:'',
      password:'',
    });
    const navigate=useNavigate();
    
  const [errors, setErrors] = useState({});
    const inputHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        setErrors({ ...errors, [e.target.name]: '' });
    }
    const validateForm = () => {
      const newErrors = {};
  
      if (!user.email.trim()) {
        newErrors.email = 'Email is required';
      }
  
      if (!user.password.trim()) {
        newErrors.password = 'Password is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    function submitForm() {
      if (validateForm()) {
      axios.post('http://localhost:3033/user/', user)
        .then((res) => {
          alert(res.data.message);
          if (res.data.message === 'success') {
            sessionStorage.setItem("userToken", res.data.token);
            if (user.email === 'admin@gmail.com') {
              navigate('/view');
            } else {
              navigate('/home');
            }
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            alert('Invalid credentials. Please try again.');
          } else {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
          }
        });
    }
  }
  return (
    <div className='employee-form'>
      <Box
        component="form"
        className='boxStyleMui'
        autoComplete="off"
        sx={{
          '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
          '& .MuiInput-underline:after': { borderBottomColor: 'black' },
        }}
      >
        <div className='field'>
          <h2 className="headingStyleMui" style={{ color: "#5f44a3", textAlign: 'center' }}>Login</h2>
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Email"
            name='email' onChange={inputHandler}
            error={Boolean(errors.email)}
          helperText={errors.email}
          />
          <br /><br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Password"
            type='password'
            name='password'
             onChange={inputHandler}
             error={Boolean(errors.password)}
             helperText={errors.password}
          /> <br /><br /><br />
          <Button variant="contained" className='buttonStyleMui' sx={{ backgroundColor: '#5f44a3' }} onClick={submitForm}>Login</Button>
        </div>
      </Box>
    </div>
  );
}

export default Login;


