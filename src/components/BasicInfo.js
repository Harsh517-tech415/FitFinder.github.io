import { Box,Stack,Button, TextField, InputAdornment } from '@mui/material'
import React,{useState,useContext} from 'react'
import {FiUser} from 'react-icons/fi'
import {DatabaseUpdate} from './Form'
const BasicInfo = () => {
  const {setNext,firstname,setFirstname,lastname,setLastname,emailname,setEmailname,dob,setDob}=useContext(DatabaseUpdate)
    
  return (
    <Stack direction="row">
 <Box sx={{
    width:"500px",
    height:"350px",
    marginLeft:{sm:"120px",lg:"600px"},
    marginRight:{sm:"100px",lg:"500px"},
    borderColor:"red",
    boxShadow:"0 0 5px 5px #f44336",
    borderRadius:"10px",
    marginTop:"70px",
    marginBottom:"10px"
 }}>
 <form >
 <label
 style=
 {{ marginLeft:"110px",
    fontSize:"40px",
    fontFamily:"Google Sans,Noto Sans Myanmar UI,arial,sans-serif",
    color:"red"
 }}
  >Basic </label>
  <label
 style=
 {{marginRight:"77px",
    fontSize:"40px",
    fontFamily:"Google Sans,Noto Sans Myanmar UI,arial,sans-serif",
    color:"lightgrey" 
 }}
  >Information </label>
 <br/>
    <TextField
    type="text" 
    label="First name"
    size="small"
    required
    placeholder='First name'
    color='error' 
    style={{
    width:"178px",
    marginLeft:"70px",
    marginTop:"30px"   
}}
value={firstname}
onChange={(e)=>{setFirstname(e.target.value)}}
InputProps={{
    endAdornment:<InputAdornment positoin="end"><FiUser/></InputAdornment>
}}
/>
<TextField
    type="text" 
    size="small"
    color='error' 
    style={{
    width:"178px",
    marginLeft:"15px",
    marginTop:"30px"   
}}
label="Last name"
    required
placeholder="Last name"
value={lastname}
onChange={(e)=>{setLastname(e.target.value)}}
/>
<TextField
    type="email" 
    size="small"
    color='error' 
    style={{
    width:"370px",
    marginLeft:"70px",
    marginTop:"30px"   
}}
    required
placeholder="Email"
InputProps={{
    endAdornment:<InputAdornment>@gmail.com</InputAdornment>
}}
value={emailname}
onChange={(e)=>{setEmailname(e.target.value)}}
/>
<TextField
 type="date"
 size="small"
 color="error"
 required
value={dob}
onChange={(e)=>{setDob(e.target.value)}}
    style=
    {{
    marginLeft:"70px",
    marginTop:"24px",
    width:"370px"
    } }
/>
<br/>
<Button 
onClick={()=>{
if(firstname=="" || lastname==""||emailname==""||dob=="")
{
    alert("Please provide required information")
}
else 
{
setNext(false)
}
}} 
className="done"
size="small"
 variant='outlined'
  color="error"
sx={{
ml:"220px",
mt:"40px"
}}
>Done</Button>
</form>
 </Box>

 </Stack>
    )
}

export default BasicInfo
