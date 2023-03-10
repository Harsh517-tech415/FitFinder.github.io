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
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import { motion } from "framer-motion";
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
  const navigate = useNavigate();
  const [animationActive, setAnimationActive] = useState(null);
  const exerciseDetail = exercisebeginner[pathIndex];
  const { setDisplayAppBar,setGymresultArgs } = useContext(Update);
  const [option, setOption] = useState(0);
  const [fetch, seFetch] = useState(0);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [displayCamera, setDisplayCamera] = useState("none");
  const [disable, setDisable] = useState(true);
  const location = useLocation();
  const [second, setSecond] = useState(5);
  const [gif, setGif] = useState();
  const [recivedGif, setDisplayGif] = useState("ok");
  const [opacityValue, setOpacityValue] = useState(0.5);
  const [gifHeight, setGifHeight] = useState(600);
  const [gifWidth, setGifWidth] = useState(600);
  const [anchorEl, setAnchorEl] = useState(0);
  const interval = useRef();
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
  const camera = useRef(null);

  useEffect(() => {
    if (location.pathname === "/gym/gymexercise") {
      setDisplayAppBar("none");
    }
    if (fetch === 0) {
      getData();
    }
    Cookies.get("StarTime") === "NaN" || "NAN" || undefined
      ? (document.cookie = `StarTime=${[
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds(),
        ]}; path=/gym`)
      : Cookies.get("StarTime");
  }, []);

  async function fun() {
    setGif(null);
    if (index !== exerciseDetail.length - 1) {
      setOption(1);
      setIndex(index + 1);
    } else if (index === exerciseDetail.length - 1) {
      let getTime = Cookies.get("StarTime").split(",");
      const currentTime = [
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
      ];
      let getTimeSecond =
        getTime[0] * 60 * 60 + getTime[1] * 60 + Number(getTime[2]);
      let currentTimeSecond =
        currentTime[0] * 60 * 60 + currentTime[1] * 60 + currentTime[2];

      let data, d1, path;
      try {
        data = await getDoc(doc(db, "UserData", `${Cookies.get("_hash")}`));
        data = data.data();
      } catch (err) {
        console.log(err);
      }
      path = Cookies.get("_adu");
      data = data[path];
      data[0] = data[0] + 1;
      data[2] =data[2] + (currentTimeSecond - getTimeSecond) / 60
      data[2]=1*(data[2].toFixed(2))
      console.log(data)
      try {
        await setDoc(
          doc(db, "UserData", `${Cookies.get("_hash")}`),
          { ...d1, [path]: data },
          { merge: true }
        );
      } catch (err) {
        console.log(err);
      }
setGymresultArgs([exerciseDetail.length+1,0,Math.floor((currentTimeSecond - getTimeSecond) / 60)+":"+(currentTimeSecond - getTimeSecond) %60])
      navigate("/gym/gymresult");
    }
  }
  useEffect(() => {
    exerciseDetail[index].side === 0 ? setDisplay("none") : setDisplay("block");
    index === 0 ? setDisable(true) : setDisable(false);
    if (index === exercisebeginner[pathIndex].length) {
      clearInterval(a);
    }
  }, [index]);

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

  useEffect(() => {
    if (second === 0) {
      clearInterval(interval.current);
      setOption(0);
    }
  }, [second]);

  useEffect(() => {
    if (option === 1) {
      interval.current = setInterval(() => {
        setSecond((second) => second - 1);
      }, 1000);
    } else {
      setSecond(5);
    }
  }, [option]);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {option === 0 ? (
        <Stack
          direction="row"
          sx={{
            width: { sm: "660px", lg: "1300px" },
            height: { sm: "770px", lg: "750px" },
          }}
        >
          <Stack
            direction="column"
            spacing={4}
            sx={{
              width: { sm: "", lg: "64px" },
              height: { sm: "", lg: "32px" },
              m: { lg: "20px 10px 0px 0px " },
            }}
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
                style={{ position: "absolute", zIndex: 9, height: "100%" }}
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
                    fontWeight: "600",
                    fontSize: "34px",
                    textAlign: "center",
                  }}
                >
                  {exerciseDetail[index].reps}
                </Typography>
                <Box
                  sx={{
                    mt: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      width: "200px",
                      height: "50px",
                      borderRadius: "30px",
                    }}
                    onClick={() => {
                      fun();
                    }}
                  >
                    Done
                  </Button>
                </Box>
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{ mt: "10px", justifyContent: "center" }}
                >
                  <Button
                    color="error"
                    disabled={disable}
                    onClick={() => {
                      setIndex((index) => index - 1);
                      setOption(1);
                    }}
                    sx={{ fontSize: "18px" }}
                  >
                    <SkipPreviousRoundedIcon fontSize="large" />
                    Previous
                  </Button>
                  <Button
                    color="error"
                    onClick={() => {
                      fun();
                    }}
                    sx={{ fontSize: "18px" }}
                  >
                    Skip
                    <SkipNextRoundedIcon fontSize="large" />
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      ) : (
        <Card
          className="gymexercisebackground"
          sx={{
            display: "inline-block",
            m: { sm: "1% 0% 2% 0%", lg: "1% 0% 2% 0%" },
            width: { sm: "640px", lg: "900px" },
            height: { sm: "770px", lg: "750px" },
            boxShadow: "0px 0px 50px 2px grey",
          }}
        >
          <CardContent sx={{ m: "10% 0% 0% 0%" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              REST
            </Typography>

            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "50px",
                textAlign: "center",
              }}
            >
              {second}
            </Typography>
            <Stack
              direction="row"
              spacing={10}
              sx={{ justifyContent: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ff1744",
                  width: "100px",
                  borderRadius: "50px",
                }}
                onClick={() => {
                  setSecond(second + 20);
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
                }}
                onClick={() => {
                  setSecond(0);
                  setOption(0);
                }}
              >
                Skip
              </Button>
            </Stack>
          </CardContent>
          <Card
            sx={{
              display: "flex",
              backgroundColor: "white",
              m: { sm: "170px 0% 0px 0px", lg: "75px 0px 0px 0px" },
              width: { sm: "649px", lg: "900px" },
              height: { sm: "350px", lg: "400px" },
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                minwidth: "300px",
                maxWidth: "400px",
                height: { sm: "350px", lg: "400px" },
              }}
              src={exerciseDetail[index].gifUrl}
            />
          </Card>
        </Card>
      )}
    </Box>
  );
};

export default GymExercise;
