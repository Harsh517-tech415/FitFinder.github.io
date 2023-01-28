import { Box, Typography, Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext, useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Update } from "../../App";
import { exercisebeginner } from "./GymInfo";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { UserC } from "../../components/FitFinderInfo";
let Cookies = require("js-cookie");
const GymExercise = ({ pathIndex }) => {
  let a1;
  const navigate = useNavigate();
  let userc = new UserC();
  const exerciseDetail = exercisebeginner[pathIndex];
  const { setDisplayAppBar, url } = useContext(Update);
  const [option, setOption] = useState();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [disable, setDisable] = useState(true);
  const location = useLocation();
  const second = useRef(0);
  const minute = useRef(0);
  const [value, setValue] = useState(0);
  const time = useRef(0);

  // let time = 30,
  let d, a;
  let t = 0,
    c = 0;

  useEffect(() => {
    if (location.pathname === "/gym/gymexercise") {
      setDisplayAppBar("none");
    }
    Cookies.get("time") === "NaN" || "NAN"
      ? (t = 0)
      : (t = Cookies.get("time"));
    // a = setInterval(()=>{setTime()}, 1000);

    // document.cookie="time=22;expires=Thu, 20 Jan 2023 12:00:00 UTC;path=/gym/gymexercise"
    // document.cookie="time=0;expires=Thu, 20 Jan 2023 12:00:00 UTC;path=/gym/gymexercise"
    //  setTimeout(()=>{document.cookie="time=0;expires=Thu, 20 Jan 2023 12:00:00 UTC;path=/gym/gymexercise"},2000)
    setOption(0);
  }, []);
  useEffect(() => {
    exerciseDetail[index].side === 0 ? setDisplay("none") : setDisplay("block");
    index === 0 ? setDisable(true) : setDisable(false);
    // console.log(index);
    if (index === exercisebeginner[pathIndex].length) {
      clearInterval(a);
    }
  }, [index]);

  useEffect(() => {
    function handleTime() {
      if (option === 1) {
        if (time.current === 0) {
          setOption(0);
          window.clearInterval(d);
        } else {
          minute.current = Math.floor(time.current / 60);
          second.current =
            time.current % 60 < 10
              ? "0" + (time.current % 60)
              : time.current % 60;
          time.current = time.current - 1;
        }
        // console.log(second.current)
      } else if (option === 0) {
        second.current = 0;
        minute.current = 0;
        // console.log(second)
        window.clearInterval(d);
        // console.log("d: ",d)
      }
    }
    time.current = 5;
    d = window.setInterval(handleTime, 1000);
  }, [option]);

  //   function setTime() {
  //   document.cookie = `time =${(+(performance.now() / 60000) + +t).toFixed(2)}; expires=Thu, 23 Jan 2023 12:00:00 UTC;path=/gym/gymexercise`;
  // console.log(document.cookie)
  // }
  return (
    <Stack direction="row">
      <Button
        onClick={() => {
          if (
            window.confirm(
              "Proceed with caution, returning may delete workout data. Continue?"
            )
          ) {
            // document.cookie = `time=0;expires=Thu,21 Jan 2023 00:00:00 UTC;path=/gym/gymexercise`;
            // clearInterval(a);
            // console.log(document.cookie)
            navigate("/gym/absb");
          }
        }}
        sx={{
          borderRadius: "40px",
          height: "60px",
          backgroundColor: "#20232a",
          boxShadow: "0px 0px 10px 2px grey",
          // display: "inline",
          m: { sm: "5% 0% 0% 0%", lg: "3% 0% 70% 12%" },
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
              onClick={() => {
                setIndex((index) => index - 1);
                setOption(1);
              }}
              sx={{ fontSize: "18px", m: { sm: "0% 10% 0% 30%" } }}
            >
              <SkipPreviousRoundedIcon fontSize="large" />
              Previous
            </Button>
            <Button
              color="error"
              onClick={() => {
                if (index !== exerciseDetail.length - 1) {
                  setOption(1);
                  setIndex(index + 1);

                  async function fun1() {
                   try{
                    a1 = await userc.updateDocData(document.cookie.split("=")[1],{absb:[0,0,0]});
                    // a1=a1.data()[url][1];
                    // console.log(a1)
                  }
                    catch(err){console.log(err)}
                  }
                  // fun1();
                
                } else {
                  async function fun() {
                    let data;
                    try{data=await userc.getDocData(document.cookie.split("=")[1])
                  data=data.data()[url]}catch(err){console.log(err)}
                   try{ await userc.updateDocData(document.cookie.split("=")[1],{[url]:[data[0]+1,data[1],data[2]]});
                   }catch(err){console.log(err)}}
                  fun();
                  navigate("/gym/gymresult");
                }
              }}
              sx={{ fontSize: "18px" }}
            >
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
          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "24px",
              m: { sm: "150px 0px 0px 45%", lg: "150px 0px 0px 45%" },
            }}
          >
            REST
          </Typography>
          <Typography
            sx={{
              // color: "white",
              fontWeight: "600",
              fontSize: "24px",
              m: { sm: "10px 0px 0px 45%", lg: "10px 0px 0px 45%" },
            }}
          >
            {minute.current}:{second.current}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ff1744",
              width: "100px",
              borderRadius: "50px",
              m: "5px 0px 0px 30%",
            }}
          >
            +20
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: "700",
              color: "red",
              backgroundColor: "white",
              width: "100px",
              borderRadius: "50px",
              m: "5px 0px 0px 10%",
            }}
            onClick={() => {
              setOption(0);
              window.clearInterval(d);
            }}
          >
            Skip
          </Button>
          <Card
            sx={{
              backgroundColor: "white",
              m: { sm: "140px 0% 0px 0px", lg: "70px 0px 0px 0px" },
              width: { sm: "649px", lg: "900px" },
              height: { sm: "350px", lg: "400px" },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                m: { sm: "0px 0px 0px 20%", lg: "0px 0px 0px 29%" },
                borderTopLeftRadius: "10px 10px",
                borderTopRightRadius: "10px 10px",
                width: "300px",
                height: { sm: "350px", lg: "400px" },
              }}
              src={exerciseDetail[index].gifUrl}
            />
          </Card>
        </Box>
      )}
    </Stack>
  );
};

export default GymExercise;

//  useEffect(()=>{
//  function  handleTime(){
//  if(option===1)
//  {
//  if(second>0){
//  c= setTimeout(()=>{setSecond((second)=>{return(--second)});handleTime()},1000)
//  }}}
//  handleTime()},[option])
//  useEffect(()=>{
//  if(second <= 0)
//  {
//  alert(2)
//  setOption(0)
//  setSecond(30)
//  window.clearTimeout(c)
//  }},[second])
