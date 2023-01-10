import { Box, Typography,Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Update } from "../../App";
import { exercisebeginner } from "./GymInfo";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
let Cookies = require("js-cookie");
const GymExercise = ({ pathIndex }) => {
  const navigate = useNavigate();
  const exerciseDetail = exercisebeginner[pathIndex];
  const { setDisplayAppBar } = useContext(Update);
  const [option, setOption] = useState(0);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [disable, setDisable] = useState(true);
  const location = useLocation();
  let t = 0,a;
  useEffect(() => {
    if (location.pathname === "/gym/gymexercise") {
      setDisplayAppBar("none");
    }
    Cookies.get("time") === "NaN"||"NAN" ? t = 0 : t = Cookies.get("time");
        setTime();
  }, []);


  useEffect(() => {
    exerciseDetail[index].side === 0 ? setDisplay("none") : setDisplay("block");
    index === 0 ? setDisable(true) : setDisplay(false);
  }, [index]);


  function setTime() {
    document.cookie = `time =${(+(performance.now() / 60000 ) + +t).toFixed(2)};expires=Wed, 11 Jan 2023 00:00:00 UTC;path=/gym;`
  console.log(Cookies.get("time"))
    a= clearTimeout(setTime,1000);
  }
  return (
    <Stack direction="row">
      <Button
        onClick={() => {
          if(window.confirm("Proceed with caution, returning may delete workout data. Continue?")){
        document.cookie=`time=;expires=Thu, 01 Jan 1970 00:00:00 UTC;  path=/gym;`;
        clearTimeout(a)   
        navigate("/gym/absb");
        }
        }}
        sx={{
          borderRadius: "40px",
          height: "60px",
          backgroundColor: "#20232a",
          boxShadow: "0px 0px 10px 2px grey",
          display: "inline",
          m:{sm:"5% 0% 0% 0%",lg:"3% 0% 70% 12%"},
        }}
      >
        <ArrowCircleLeftRoundedIcon fontSize="large" color="error" />{" "}
      </Button>
      {option === 0 ? (
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "white",
            m: { sm: "5px 0% 0px 0.5%", lg: "5px 20% 0% 0.5%" },
            width: { sm: "650px", lg: "900px" },
            height: { sm: "770px", lg: "750px" },
            boxShadow: "0px 0px 50px 2px grey",
          }}
        >
          <CardMedia
            sx={{
              display: "inline",
              m: { sm: "2% 25% 0% 25%", lg: "1.5% 20% 0% 22%" },
              width: { sm: "300px", lg: "500px" },
              height: { sm: "360px", lg: "450px" },
            }}
            component="img"
            src={exerciseDetail[index].gifUrl}
          />
          <CardContent>
            <Typography
              sx={{
                m: { sm: "10px 0px 0px 0px", lg: "10px 0px 0px 0px" },
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "800",
              }}
            >
              {exerciseDetail[index].name}
            </Typography>
            <Typography
              sx={{
                display: { display },
                color: "grey",
                m: { sm: "5% 0% 0% 43.2%", lg: "2% 0% 0% 45%" },
              }}
            >
              Each Side x{exerciseDetail[index].side}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "34px",
                m: { sm: "5% 0% 0% 46%", lg: "2% 0% 0% 47%" },
              }}
            >
              {exerciseDetail[index].reps}
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{
                width: "200px",
                height: "50px",
                borderRadius: "30px",
                m: { sm: "3% 36%", lg: "3% 39.5%" },
              }}
            >
              Done
            </Button>
            <Button
              color="error"
              disabled={disable}
              onClick={()=>{setOption(0)}}
              sx={{ fontSize: "18px", m: { sm: "0% 10% 0% 30%" } }}
            >
              <SkipPreviousRoundedIcon fontSize="large" />
              Previous
            </Button>
            <Button color="error" onClick={()=>{setOption(1);setIndex(index+1)}} sx={{ fontSize: "18px" }}>
              Skip
              <SkipNextRoundedIcon fontSize="large" />
            </Button>
          </CardContent>
        </Box>
      ) : (
        <Box
        className="gymexercisebackground"
        sx={{
          display: "inline-block",
          m: { sm: "5px 0% 0px 0.5%", lg: "5px 20% 0% 0.5%" },
          width: { sm: "650px", lg: "900px" },
          height: { sm: "770px", lg: "750px" },
          boxShadow: "0px 0px 50px 2px grey",
        }}
      >
        <Card sx={{backgroundColor:"white",m:{sm:"420px 0% 0px 0px",lg:"350px 0px 0px 0px"},width:{sm:"650px",lg:"900px"},height:{sm:"350px",lg:"400px"}}}>
      <CardMedia  component="img" sx={{m:{sm:"0px 0px 0px 20%",lg:"0px 0px 0px 29%"},borderTopLeftRadius:"10px 10px",borderTopRightRadius:"10px 10px",width:"300px",height:{sm:"350px",lg:"400px"}}} src={exerciseDetail[index].gifUrl}/>
      </Card>
      </Box>
      )}
    </Stack>
  );
};

export default GymExercise;
