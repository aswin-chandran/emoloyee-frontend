import { Box, Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'

const Employee = () => {
  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  })

  return (
    <div style={{margin:'5% 30%',justifyContent:'center',display:'flex', textAlign:'center'}}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label="Name" />
        <TextField label="Designation" />
      </div>
      <div>
      <TextField label="Location " />
      <TextField label="Salary" />
      </div>
      <br />
      <Button size='large' variant="outlined" color='success'> Add Employee</Button>
    </Box>
 
    </div>
  )
}

export default Employee
