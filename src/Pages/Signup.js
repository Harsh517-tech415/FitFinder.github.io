import { Link, useNavigate } from 'react-router-dom'
import { Stack, Typography,Box, TextField, Button } from '@mui/material'
import Axios from 'axios'
import React, { useContext,useState } from 'react'
import { Update } from '../App'
import { Navigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate();
    const {textColor}=useContext(Update)
    const [usernameReg,setUsernameReg]=useState('')
    const [passwordReg,setPasswordReg]=useState('')
    const [res,setRes]=useState('')
    const [resColor,setResColor]=useState('');
const register=()=>{
   Axios.post('http://localhost:5500/register',
  {username:usernameReg,
    password:passwordReg})
  .then((response)=>
  {if(response.data==="Username already taken")
  {
setResColor("red")
  }
  else {
    setResColor("green")
    navigate("/login")
  }
    setRes(response.data)})  
  .catch((error)=>
  {
    if(error.response)
    {
      console.log(error.response)
      console.log("server responded")
    }
    else if(error.request)
    {
      console.log("network error")
    }
    else {
      console.log(error)
    }
  })
  
}
  
   return (
    
      <Box sx={{ml:{xs:"380px",lg:"600px"},mt:"120px"}}>
        <Stack direction="column">
           <Typography color={resColor} >{res}</Typography>
            <Typography color={textColor} fontSize="23px" fontWeight="100px">
                Username
            </Typography>
            <TextField
            onChange={(event)=>{setUsernameReg(event.target.value)}}
            sx={{
                input:{fontSize:"20px",color:textColor},
                width:{sm:"300px",lg:"300px"}}}
                />
        </Stack>
        <Stack mt="23px">
        <Typography color={textColor} fontSize="23px" fontWeight="100px">Password</Typography>
        <TextField type="password"
        onChange={(event)=>{setPasswordReg(event.target.value)}}
        sx={{input:{fontSize:"20px",color:textColor},
                width:{sm:"300px",lg:"300px"}}}/>    
        </Stack>
        <Button
        variant="outlined"
        style={{
          fontSize:20,}}
          sx={{ml:"90px",mt:"9px",position:"inherit"}}
        onClick={register}
        color="error"
        >Signup</Button>
        <br/>
     <Typography sx={{ml:"90px",mt:"20px"}}>Already a user?</Typography>    
     <Button variant='outlined'  color="success" sx={{ml:"105px",mt:"10px"}}><Link to="/login" style={{color:"green",textDecoration:"none"}} >Login</Link></Button>
      </Box>
    
  )
}

export default Signup
