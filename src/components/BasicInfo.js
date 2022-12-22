import { Box } from '@mui/material'
import { red } from '@mui/material/colors'
import { color, style } from '@mui/system'
import React from 'react'

const BasicInfo = () => {
  return (
 <Box sx={{
    width:"500px",
    height:"350px",
    marginLeft:{sm:"120px",lg:"470px"},
    borderColor:"red",
    boxShadow:"0 0 5px 5px #f44336",
    borderRadius:"10px"
 }}>
 <form>
 <label
 style=
 {{ 
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
    <input
    type="text" 
    style={{
    borderRadius:"5px",
    height:"34px",
    width:"178px",
    border:"1px solid grey",    
}}
    required
placeholder="First name"
/>
    <input
    type="text"
     
    style={{
    borderRadius:"5px",
    height:"34px",
    width:"178px",
    border:"1px solid grey",
    marginRight:"50px",
    marginLeft:"10px",
    marginTop:"30px"
    
}}
required
placeholder="Last name"
/>
<input
    type="email"
    style=
    {{
    borderRadius:"5px",
    height:"34px",
    width:"178px",
    border:"1px solid grey",  
    marginRight:"44px",
    marginTop:"24px",
    width:"370px"
    } }
    placeholder="Email Id"
/>
<input type="date"
    style=
    {{
    borderRadius:"5px",
    height:"34px",
    width:"178px",
    border:"1px solid grey",  
    marginRight:"44px",
    marginTop:"24px",
    width:"370px"
    } }
/>
<br/>
<button type="submit"
action="#"
style=
    {{
    borderRadius:"5px",
    height:"34px",
    width:"178px",
    border:"1px solid grey",  
    marginRight:"136px",
    marginTop:"30px",
    backgroundColor:"#616161"
    }}
    onClick={(event)=>
    {
        event.preventDefault();
            
    }}>Next</button>
 </form>

 </Box>

    )
}

export default BasicInfo
