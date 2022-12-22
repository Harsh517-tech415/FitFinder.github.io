import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useState,useEffect} from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { Update } from "../App";
const Login = () => {
  const navigate=useNavigate();
  const { textColor } = useContext(Update);
  const [usernameSin, setUsername] = useState("");
  const [passwordSin, setPassword] = useState("");
  const [res,setRes]=useState('');
  const[sinColor,setSinColor]=useState('')
  const signin=()=>{
    axios.post("http://localhost:5500/login",
    {
     username:usernameSin,
     password:passwordSin
    }).then((response)=>{
      if(response.data==="Username not found please Register your account" 
      ||response.data==="Username or Password is incorrect try again"
      ||response.data==="Please enter username and password")
      {
      setSinColor("red")
      setPassword('')
      setUsername('')
      setRes(response.data)
      }
      
      else  {
        setSinColor("green")
      setPassword('')
      setUsername('')
      setRes(response.data)
      navigate("/home")
      }
    })
  }
 
  return (
    <Box sx={{ ml: { xs: "380px", lg: "600px" }, mt: "120px" }}>
    <Typography color={sinColor}>{res}</Typography>
      <Stack direction="column">
        <Typography color={textColor} fontSize="23px" fontWeight="100px" >
          Username
        </Typography>
        <TextField
        placeholder="Username"
        value={usernameSin}
          sx={{
            input: { fontSize: "20px", color: textColor },
            width: { sm: "300px", lg: "300px" },
            
          }}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Typography
          style={{
            color: { textColor },
            fontSize: 23,
            marginTop: 10,
            fontWeight: 100,
          }}
        >
          Password
        </Typography>
        <TextField
        value={passwordSin}
        placeholder="Password"
        type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          
          sx={{
            input: { fontSize: "20px", color: textColor },
            width: { sm: "300px", lg: "300px" },
            
          }}
        />
      <span><Button sx={{ml:{sm:"105px",lg:"100px"},mt:"7px",color:"#1976d2"}} variant="outlined"
  onClick={signin}
      >Login</Button></span>
      </Stack>
    </Box>
  );
};

export default Login;
