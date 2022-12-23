import { Box } from '@mui/material'
import React from 'react'

const HealthInfo = () => {
  return (
    <Box sx={{
        width:"500px",
    height:"350px",
    marginLeft:{sm:"150px"},
    marginRight:{sm:"100px",lg:"500px"},
    borderColor:"red",
    boxShadow:"0 0 5px 5px #f44336",
    borderRadius:"10px",
    marginTop:"70px"
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
        <input
        type="text" 
        style={{
        borderRadius:"5px",
        height:"34px",
        width:"178px",
        border:"1px solid grey", 
        marginLeft:"70px"   
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
        marginLeft:"70px",
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
        marginLeft:"70px",
        marginTop:"24px",
        width:"370px"
        } }
    />
    <button type="submit" variant='outlined' onClick={(event)=>{event.preventresest()}}>Done</button>
    </form>
     </Box>
    )
}

export default HealthInfo