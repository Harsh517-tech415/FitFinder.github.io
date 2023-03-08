import { Box, Typography, Stack, Button, Popover } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext, useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Update } from "../../App";
import { exercisebeginner } from "./GymInfo";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import { UserC } from "../../components/FitFinderInfo";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import { motion, useDragControls } from "framer-motion";
import { CameraAlt } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../components/firebase";
import Webcam from "react-webcam";
import Slider from "@mui/material/Slider";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import EditIcon from "@mui/icons-material/Edit";

let Cookies = require("js-cookie");
const GymExercise = ({ pathIndex }) => {
  const controls = useDragControls();
  const navigate = useNavigate();
  const [animationActive, setAnimationActive] = useState(null);
  let userc = new UserC();
  const exerciseDetail = exercisebeginner[pathIndex];
  const { setDisplayAppBar, url } = useContext(Update);
  const [option, setOption] = useState();
  const [fetch, seFetch] = useState(0);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [displayCamera, setDisplayCamera] = useState("none");
  const [disable, setDisable] = useState(true);
  const location = useLocation();
  const second = useRef(0);
  const minute = useRef(0);
  const time = useRef(0);
  const [gif, setGif] = useState();
  const [recivedGif, setDisplayGif] = useState("ok");
  const [opacityValue, setOpacityValue] = useState(0.5);
  const [gifHeight, setGifHeight] = useState(600);
  const [gifWidth, setGifWidth] = useState(600);
  const [anchorEl, setAnchorEl] = useState(0);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  
  async function getData() {
    try {
      const aa = await getDoc(doc(db, "Exercise", Cookies.get("_adu")));
    } catch (err) {
      console.log(err);
    }
  }
  let d, a;
  let t = 0;
  const camera = useRef(null);
  useEffect(() => {
    if (location.pathname === "/gym/gymexercise") {
      setDisplayAppBar("none");
    }
    if (fetch === 0) {
      getData();
    }
    Cookies.get("time") === "NaN" || "NAN"||undefined
      ? (document.cookie=`StarTime=${[new Date().getHours(),new Date().getMinutes(),new Date().getSeconds()]}; path=/gym`)
      : (Cookies.get("time"));
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
      if (index === exerciseDetail.length-1) {
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

  async function displayGif() {
    try {
      await setDoc(doc(db, "Gif", "Orignal"), {
        gifUrl: exerciseDetail[index].gifUrl,
      });
      await setDoc(doc(db, "Gif", "User"), { User: Cookies.get("_hash") });
      setTimeout(() => {
        const starsRef = ref(storage, `${Cookies.get("_hash")}`);
        getDownloadURL(starsRef)
          .then((url) => {
            console.log("ok");
            setGif(url);
            console.log(gif);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 30000);
    } catch (err) {
      console.log(err);
    }
    // setDisplayGif("ok")
  }

  const variants = {
    displayButton: { opacity: 1 },
    closeButton: { opacity: 0 },
    open: { x: +450, minWidth: "650px", maxWidth: "660px" },
    close: {
      x: 12,
      minWidth: "650px",
      maxWidth: "900px",
    },
    decreaseCameraIcon: { width: "300px" },
    increageCameraIcon: { width: "480px" },
    openCamera: { y: 0.5, opacity: 1 },
    closeCamera: { y: -150 },
  };
  useEffect(() => {
    if (animationActive === true) {
      setDisplayCamera("ok");
    } else {
      setDisplayCamera("none");
    }
  }, [animationActive]);
  function startDrag(event) {
    controls.start(event);
  }
  return (
    <Stack direction="row">
      {/* <Button
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
      </Button> */}
      {option === 0 ? (
        <Stack
          direction="row"
          sx={{
            m: { sm: "1% 0% 0% 13%", lg: "1% 0% 0% 7%" },
            width: { sm: "660px", lg: "1300px" },
            height: { sm: "760px", lg: "750px" },
          }}
        >
          <Stack
            direction="column"
            spacing={4}
            sx={{ m: "20px 10px 0px 0px " }}
          >
            <Button
              component={motion.button}
              variants={variants}
              initial={{ opacity: 0 }}
              animate={animationActive ? "displayButton" : "hideButton"}
              onClick={displayGif}
              variant="contained"
              color="error"
              sx={{
                backgroundColor: "grey",
              }}
            >
              <PersonIcon />
            </Button>

            <Button
              component={motion.button}
              variants={variants}
              initial={{ opacity: 0 }}
              animate={animationActive ? "displayButton" : "hideButton"}
              onClick={() => {
                setDisplayGif("none");
              }}
              color="error"
              variant="contained"
              sx={{ backgroundColor: "grey" }}
            >
              <PersonOffIcon variant="contained" />
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ backgroundColor: "grey" }}
              component={motion.button}
              variants={variants}
              initial={{ opacity: 0 }}
              animate={animationActive ? "displayButton" : "hideButton"}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                console.log(anchorEl);
              }}
            >
              <EditIcon />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Card sx={{ width: "400px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "0 20px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", mr: "10px" }}>
                    Opacity:
                  </Typography>
                  <Slider
                    step={0.1}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component={motion.div}
                    variants={variants}
                    initial={{ opacity: 0 }}
                    animate={animationActive ? "displayButton" : "hideButton"}
                    color="error"
                    max={1}
                    min={0}
                    defaultValue={opacityValue}
                    valueLabelDisplay="auto"
                    onChange={(e) => {
                      setOpacityValue(
                        e.target.value === "" ? "" : Number(e.target.value)
                      );
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "0 20px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", mr: "20px" }}>
                    Height:
                  </Typography>
                  <Slider
                    step={1}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component={motion.div}
                    variants={variants}
                    initial={{ opacity: 0 }}
                    animate={animationActive ? "displayButton" : "hideButton"}
                    color="error"
                    max={1000}
                    min={600}
                    defaultValue={gifHeight}
                    valueLabelDisplay="auto"
                    onChange={(e) => {
                      setGifHeight(
                        e.target.value === "" ? "" : Number(e.target.value)
                      );
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "0 20px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", mr: "25px" }}>
                    Width:
                  </Typography>
                  <Slider
                    step={1}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component={motion.div}
                    variants={variants}
                    initial={{ opacity: 0 }}
                    animate={animationActive ? "displayButton" : "hideButton"}
                    color="error"
                    max={1000}
                    min={100}
                    defaultValue={gifWidth}
                    valueLabelDisplay="auto"
                    onChange={(e) => {
                      setGifWidth(
                        e.target.value === "" ? "" : Number(e.target.value)
                      );
                    }}
                  />
                </Box>
              </Card>
            </Popover>
          </Stack>
          <Box>
            <Card
              component={motion.div}
              variants={variants}
              intial={{ y: -200, opacity: 0 }}
              animate={animationActive ? "openCamera" : "closeCamera"}
              transition={{ duration: 0.3 }}
              sx={{
                display: displayCamera,
                position: "absolute",
                m: { md: "5px 0% 0px 0%", lg: "5px 0% 0px 0%" },
                width: { sm: "", lg: "550px" },
                height: { sm: "", lg: "744px" },
                boxShadow: "0px 0px 11px 2px grey",
              }}
            >
              <Webcam
                ref={camera}
                style={{ position: "absolute", zIndex:9 , height: "100%" }}
                mirrored={true}
                imageSmoothing={true}
                screenshotFormat="image/webp"
              />

              <Box
                component={motion.div}
                drag
                dragElastic={0}
                sx={{
                  position: "absolute",
                  width: `${gifWidth}px`,
                  height: `${gifHeight}px`,
                  zIndex: 10,
                }}
                >
                <CardMedia
                  sx={{
                    opacity: opacityValue,
                    display: recivedGif,
                    width: "100%",
                    height: "100%",
                  }}
                  component="img"
                  src={gif}
                />
              </Box>
            </Card>
            <Card
              sx={{
                display: "block",
                position: "absolute",
                backgroundColor: "white",
                m: { sm: "0% 0% 0% 0%", lg: "0% 0% 0% 7%" },
                width: { sm: "650px", lg: "900px" },
                height: { sm: "750px", lg: "750px" },
                boxShadow: "0px 0px 50px 2px grey",
              }}
              component={motion.div}
              animate={
                animationActive === true
                  ? "open"
                  : animationActive === false
                  ? "close"
                  : ""
              }
              variants={variants}
            >
              <Button
                sx={{ position: "absolute", m: "6% 0% 0% 90%" }}
                onClick={() => {
                  if (
                    (animationActive === false || animationActive === null) &&
                    window.innerWidth >= 1530
                  )
                    setAnimationActive(true);
                  else {
                    setAnimationActive(false);
                  }
                }}
              >
                <CameraAlt sx={{ color: "grey" }} />
              </Button>
              <Box
                variants={variants}
                animate={
                  animationActive === true
                    ? "decreaseCameraIcon"
                    : animationActive === false
                    ? "increageCameraIcon"
                    : ""
                }
                sx={{
                  width: { sm: "300px", lg: "480px" },
                  height: { sm: "360px", lg: "450px" },
                  m: "auto",
                }}
              >
                <CardMedia component="img" src={exerciseDetail[index].gifUrl} />
              </Box>
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
                  onClick={() => {
                    setGif(null);
                    if (index !== exerciseDetail.length - 1) {
                      setOption(1);
                      setIndex(index + 1);}
                    else if(index===exerciseDetail.length-1)
                    {
                      let getTime=Cookies.get("StarTime").split(",")
                      const currentTime=[new Date().getHours(),new Date().getMinutes(),new Date().getSeconds()]
                      let getTimeMinute=Math.floor([(getTime[0]*60*60)+(getTime[1]*60)+Number(getTime[2])]/60)
                      let getTimeSecond=[(getTime[0]*60*60)+(getTime[1]*60)+Number(getTime[2])]%60
                      let currentTimeMinute=Math.floor([(currentTime[0]*60*60)+(currentTime[1]*60)+Number(currentTime[2])]/60)
                      let currentTimeSecond=[(currentTime[0]*60*60)+(currentTime[1]*60)+Number(currentTime[2])]%60
                      console.log("Minute:",currentTimeMinute-getTimeMinute,"Second:",Math.abs(currentTimeSecond-getTimeSecond))
                    navigate('/gym/gymresult')}
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
                    setGif(null);
                    if (index !== exerciseDetail.length - 1) {
                      setOption(1);
                      setIndex(index + 1);

                      // async function fun1() {
                      //  try{
                      //   a1 = await userc.updateDocData(document.cookie.split("=")[1],{absb:[0,0,0]});
                      // a1=a1.data()[url][1];
                      // console.log(a1)
                      // }
                      //   catch(err){console.log(err)}
                      // }
                      // fun1();
                    } else {
                      async function fun() {
                        let data,
                          hash = Cookies.get("_hash");
                        try {
                          data = await userc.getDocData(hash.split("=")[1]);
                          data = data.data()[url];
                        } catch (err) {
                          console.log(err);
                        }
                        try {
                          await userc.updateDocData(hash.split("=")[1], {
                            [url]: [data[0] + 1, data[1], data[2]],
                          });
                        } catch (err) {
                          console.log(err);
                        }
                      }
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
              {/* </Card> */}
            </Card>
            {/* </Card> */}
          </Box>
        </Stack>
      ) : (
        <Card
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
        </Card>
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
