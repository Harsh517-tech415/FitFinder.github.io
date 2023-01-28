import { Link, useNavigate } from "react-router-dom";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { Update } from "../App";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { textColor } = useContext(Update);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [res, setRes] = useState("");
  const [messageColor,setMessageColor]=useState("red")
  const [disabled, setDisabled] = useState(true);
  const register = async () => {
    if (usernameReg === "" || passwordReg === "") {
      setRes("Provide the required Info");
    } else {
      createUserWithEmailAndPassword(auth, usernameReg, passwordReg)
        .then((res) => {
          setMessageColor("green")
          setRes("SignUp Successfully*");
           setTimeout(()=>{navigate('/login')},1000)
        })
        .catch((err) => {
          if(err.message==="Firebase: Error (auth/email-already-in-use).")
          {setMessageColor("red")
            setRes("User is already registred try to login*");}
       else{setRes(err.message)} });
       
    }
    //     setLoading(true);
    //    await sign(usernameReg,passwordReg)
    //   .catch(error=>
    //   {
    //   if(error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){setRes("Already Register Try to Login")}
    //   else if (error=="FirebaseError: Firebase: Error (auth/internal-error)."){setRes("Missing password")}
    //   else if (error=="FirebaseError: Firebase: Error (auth/missing-email)."){setRes("Missing EmailId")}
    //   else { setRes("Try Again")}
    // })

    // setLoading(false)
  };

  return (
    <Box sx={{ ml: { xs: "380px", lg: "600px" }, mt: "120px" }}>
      <Stack direction="column">
        <Typography sx={{color:messageColor}}>{res}</Typography>
        <Typography fontSize="20px" fontWeight="100px">
          Username
        </Typography>
        <TextField
          placeholder="Username"
          onChange={(event) => {
            setUsernameReg (event.target.value);
          }}
          sx={{
            input: { fontSize: "20px", color: textColor },
            width: { sm: "300px", lg: "300px" },
          }}
        />

        <Typography sx={{ mt: "2%" }} color={textColor} fontSize="20px">
          Password
        </Typography>
        <TextField
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPasswordReg (event.target.value);
          }}
          sx={{
            input: { fontSize: "25px", color: textColor },
            width: { sm: "300px", lg: "300px" },
          }}
        />

        <Button
          variant="outlined"
          style={{
            fontSize: "15px",
          }}
          sx={{ ml: "90px", mt: "9px", width: "100px" }}
          onClick={register}
          color="error"
          disabled={loading}
        >
          Signup
        </Button>
        <br />
        <Typography sx={{ ml: "90px" }}>Already a user?</Typography>
        <Button
          variant="outlined"
          color="success"
          sx={{ ml: "90px", mt: "10px", fontSize: "15px", width: "100px" }}
        >
          <Link to="/login" style={{ color: "green", textDecoration: "none" }}>
            Login
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default Signup;
