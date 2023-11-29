import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import '../Style.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosintercepter';

const Employee = (props) => {
  const [form,setForm]=useState({
    name: props.data ? props.data.name : '',
    designation: props.data ? props.data.designation : '',
    location: props.data ? props.data.location : '',
    salary: props.data ? props.data.salary : '',
    email: props.data ? props.data.email : '',
    password: props.data ? props.data.password : ''
  });
    const navigate=useNavigate();
    const inputHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};
      if (!form.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!form.designation.trim()) {
        newErrors.designation = 'Designation is required';
      }
      if (!form.location.trim()) {
        newErrors.location = 'Location is required';
      }
      if (!form.salary.trim()) {
        newErrors.salary = 'Salary is required';
      }
      if (!form.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = 'Invalid email address';
      }
  
      if (!form.password.trim()) {
        newErrors.password = 'Password is required';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}/.test(form.password)) {
        newErrors.password =
          'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  function submitForm() {
    if(props.method==="put"){
      axiosInstance.put("/admin/edit/"+props.data._id,form)
      .then((response)=>{
       
        if (response.data==="Updated successfully") {
         alert(response.data)
          window.location.reload(false);
    
          
        } else {
          alert("not updated")
        }
      })}

    else{
      if (validateForm()) {
    axiosInstance.post('/admin/add', form)
      .then((res) => {
        alert(res.data);
        navigate('/view');
      })
    }}
  }
  
  return (
    <div className='employee-form' style={{margin:"2%"}}>
      <Box
        component="form"
        className='boxStyleMui'
        autoComplete="off"
        sx={{
          '& .MuiInputLabel-root.Mui-focused': { color: 'black' },
          '& .MuiInput-underline:after': { borderBottomColor: 'black' }
        }}
      >
        <div className='field'>
          <h2 className="headingStyleMui" style={{ color: "#5f44a3", textAlign: 'center' }}>Employee Form</h2>
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Name"
            name='name'
            value={form.name}
            onChange={inputHandler}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Email"
            name='email'
            value={form.email}
            onChange={inputHandler}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Designation"
            value={form.designation}
            name='designation'
            onChange={inputHandler}
            error={Boolean(errors.designation)}
            helperText={errors.designation}
          />
          <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Location"
            name='location'
            value={form.location}
            onChange={inputHandler}
            error={Boolean(errors.location)}
            helperText={errors.location}
          /> <br /><br />
          <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Salary"
            name='salary'
            value={form.salary}
            onChange={inputHandler}
            error={Boolean(errors.salary)}
            helperText={errors.salary}
          /> <br /><br />
            <TextField
            className='textFieldStyleMui'
            id="standard-basic"
            variant="standard"
            label="Password"
            name='password'
            value={form.password}
            onChange={inputHandler}
            
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <br /><br />
          <Button variant="contained" className='buttonStyleMui' sx={{ backgroundColor: '#5f44a3' }} onClick={submitForm}>Submit</Button>
        </div>
      </Box>
    </div>
  );
}

export default Employee;
