import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Update } from "../App";
import { auth } from "./firebase";
import { UserC } from "../components/FitFinderInfo";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  let userc = new UserC();
  const { textColor, setNav } = useContext(Update);
  const [usernameSin, setUsername] = useState("");
  const [passwordSin, setPassword] = useState("");
  const [res, setRes] = useState("");
  const [sinColor, setSinColor] = useState("");
  const signin = () => {
    signInWithEmailAndPassword(auth, usernameSin, passwordSin)
      .then((response) => {
        setRes("SuccesFully Logined");
        document.cookie = `_hash=${response.user.uid}`;
        setNav(1);
        let hash=Cookies.get("_hash")
        async function fun() {
          let a = {
            absb: [0, 0, 0],
            absi: [0, 0, 0],
            absa: [0, 0, 0],
            armb: [0, 0, 0],
            armi: [0, 0, 0],
            arma: [0, 0, 0],
            chestb: [0, 0, 0],
            chesti: [0, 0, 0],
            chesta: [0, 0, 0],
            legb: [0, 0, 0],
            legi: [0, 0, 0],
            lega: [0, 0, 0],
            backb: [0, 0, 0],
            backi: [0, 0, 0],
            backa: [0, 0, 0],
            fullbody:[0,0,0],
            lowerbody:[0,0,0]
          };
          
          try {
            await userc.setDocData(hash,a);
          } catch (err) {
            console.log(err);
          }
        }
        async function verify()
        {
          try{
            const a=await userc.getDocData(hash);
            if(a.data()){console.log(a.data())}
            else{console.log(hash); fun()}
          }catch(err){console.log(err)}
        }
        verify()
       setTimeout(()=>{navigate("/")},1000)
      })
      .catch((err) => {
        setRes(err.message);
      });
  };

  return (
    <Box sx={{ ml: { xs: "380px", lg: "600px" }, mt: "120px" }}>
      <Typography color={sinColor}>{res}</Typography>
      <Stack direction="column">
        <Typography color={textColor} fontSize="23px" fontWeight="100px">
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
        <span>
          <Button
            sx={{
              ml: { sm: "105px", lg: "100px" },
              mt: "7px",
              color: "#1976d2",
            }}
            variant="outlined"
            onClick={signin}
          >
            Login
          </Button>
        </span>
      </Stack>
    </Box>
  );
};

export default Login;

// axios.post("http://localhost:5500/login",
// {
//  username:usernameSin,
//  password:passwordSin
// }).then((response)=>{
//   if(response.data==="Username not found please Register your account"
//   ||response.data==="Username or Password is incorrect try again"
//   ||response.data==="Please enter username and password")
//   {
//   setSinColor("red")
//   setPassword('')
//   setUsername('')
//   setRes(response.data)
//   }

//   else  {
//     setSinColor("green")
//   setPassword('')
//   setUsername('')
//   setRes(response.data)
//   navigate("/home")
//   }
// })
