import { Link, useNavigate } from "react-router-dom";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Update } from "../App";
import {sign,useAuth} from '../lib/init-firebase'
import { useForm } from "react-hook-form";
const Signup = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)
  const { textColor } = useContext(Update);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [res, setRes] = useState("");
const currentUser=useAuth() 
  const register = async() => 
  {setLoading(true);
   await sign(usernameReg,passwordReg)
  .catch(error=>
  {
  if(error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){setRes("Already Register Try to Login")}
  else if (error=="FirebaseError: Firebase: Error (auth/internal-error)."){setRes("Missing password")}
  else if (error=="FirebaseError: Firebase: Error (auth/missing-email)."){setRes("Missing EmailId")} 
  else { setRes("Try Again")}
})
  
  setLoading(false)}

  return (
    <Box sx={{ ml: { xs: "380px", lg: "600px" }, mt: "120px" }}>
      <Stack direction="column">
        <Typography color="error">{res}</Typography>
        <Typography color={textColor} fontSize="23px" fontWeight="100px">
          Username
        </Typography>
        <TextField
          placeholder="Username"
          onChange={(event) => {
            setUsernameReg(event.target.value);
          }}
          sx={{
            input: { fontSize: "20px", color: textColor },
            width: { sm: "300px", lg: "300px" },
          }}
        />
      </Stack>
      <Stack mt="23px">
        <Typography color={textColor} fontSize="23px" fontWeight="100px">
          Password
        </Typography>
        <TextField
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPasswordReg(event.target.value);
          }}
          sx={{
            input: { fontSize: "20px", color: textColor },
            width: { sm: "300px", lg: "300px" },
          }}
        />
      </Stack>
      <Button
        variant="outlined"
        style={{
          fontSize: 20,
        }}
        sx={{ ml: "90px", mt: "9px", position: "inherit" }}
        onClick={register}
        color="error"
      disabled={loading}
      >
        Signup
      </Button>
      <br />
      <Typography sx={{ ml: "90px", mt: "20px" }}>Already a user?</Typography>
      <Button
        variant="outlined"
        color="success"
        sx={{ ml: "105px", mt: "10px" }}
      >
        <Link to="/login" style={{ color: "green", textDecoration: "none" }}>
          Login
        </Link>
      </Button>
    </Box>
  );
};

export default Signup
