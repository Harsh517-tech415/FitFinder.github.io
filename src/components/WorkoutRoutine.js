import React, { useEffect, useContext, useState } from "react";
import { Update } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import { exercises } from "../Pages/Gym/GymInfo";
import { time } from "../Pages/Gym/GymInfo";
import WorkoutCollection from "../Pages/Gym/WorkoutCollection";
import { Typography, Box, TextField, Stack, Button } from "@mui/material";
import chestb from "../assets/images/chest1.jpg";
import chesti from "../assets/images/chest2.jpg";
import chesta from "../assets/images/chest3.png";
import absb from "../assets/images/absb.jpg";
import absi from "../assets/images/abs2.jpg";
import absa from "../assets/images/abs3.webp";
import armb from "../assets/images/arm1.webp";
import armi from "../assets/images/arm2.jpg";
import arma from "../assets/images/arm3.webp";
import legb from "../assets/images/leg1.jpg";
import legi from "../assets/images/leg2.jpg";
import lega from "../assets/images/leg3.webp";
import backb from "../assets/images/back1.jpg";
import backi from "../assets/images/back2.webp";
import backa from "../assets/images/back3.webp";
import fullbody from "../assets/images/FullBody.jpg";
import lowerbody from "../assets/images/LowerBody.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import Cookies from "js-cookie";

const WorkoutRoutine = ({ pathIndex, setPathIndex }) => {
  const [rest, setRest] = useState(10);
  const [option, setOption] = useState(0),
    [exercisebeginner, setExerciseBeginner] = useState({});
  const workouts = [0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const image = [
    fullbody,
    lowerbody,
    absb,
    absi,
    absa,
    chestb,
    chesti,
    chesta,
    armb,
    armi,
    arma,
    legb,
    legi,
    lega,
    backb,
    backi,
    backa,
  ];
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const navigate = useNavigate();
  async function setData() {
    try {
      let a = await getDoc(doc(db, "Exercise", `${Cookies.get("_adu")}`));
      a = a.data();
      setExerciseBeginner(a);
      setOption(1);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    console.log(exercisebeginner)
    exercises.map((value, index) => {
      if (location.pathname === `/gym/${value}`) {
        setDisplayAppBar("none");
        setPathIndex(index);
      }
    });
    if (option === 0) {
      setData();
    }
  }, []);
  return (
    <>
      <Card>
        <CardMedia component="img" Height="450px" src={image[pathIndex]} />
        <CardContent>
          <Typography
            sx={{
              ml: { sm: "70px", lg: "265px" },
              fontWeight: "1000",
              color: "red",
              display: "inline",
            }}
          >
            |
          </Typography>
          <Typography
            sx={{
              display: "inline",
              m: "0px 10px ",
              fontweight: "950",
              fontSize: { sm: "20px", lg: "23px" },
            }}
          >
            {(time[pathIndex] * rest) / 60 + time[pathIndex]} min
          </Typography>
          <Typography
            sx={{
              display: "inline",
              ml: { sm: "50px", lg: "100px" },
              Weight: "950",
              fontSize: { sm: "20px", lg: "23px" },
            }}
          >
            <FiberManualRecordIcon sx={{ width: "10px" }} />
            {workouts[pathIndex]} workouts
          </Typography>
          <Typography
            sx={{
              display: "inline",
              ml: { sm: "50px", lg: "100px" },
              Weight: "950",
              fontSize: { sm: "20px", lg: "23px" },
            }}
          >
            <FiberManualRecordIcon sx={{ width: "10px" }} />
            Equipment: Required
          </Typography>
          <Typography
            sx={{
              display: "inline",
              ml: { sm: "65px", lg: "300px" },
              Weight: "950",
              fontSize: { sm: "20px", lg: "23px" },
            }}
          >
            <FiberManualRecordIcon sx={{ width: "10px" }} />
            RestTime:
          </Typography>
          <TextField
            type="number"
            label="<40sec"
            onChange={(e) => {
              e.target.value = e.target.value % 40;
              setRest(e.target.value);
            }}
            defaultValue={rest}
            size="small"
            style={{ position: "absolute", width: "65px" }}
            sx={{ display: "inline", ml: "10px" }}
          />
        </CardContent>
      </Card>
      <Box sx={{ m: { sm: "0px 0px 0px 88px", lg: "0px 275px" } }}>
        <Stack
          className="DiscoverScrollbar"
          sx={{ height: { sm: "600px", lg: "600px" }, overflowY: "scroll" }}
        >
          {option === 1 ? (
            Object.keys(exercisebeginner).map((item, index) => (
              <WorkoutCollection pathexercise={exercisebeginner[index]} />
            ))
          ) : (
            <span></span>
          )}
          <Button
            onClick={() => {
              let hash = Cookies.get("_hash");
              if (hash === "b229jjcWX9sczZSgE3hL") {
                navigate("/signup");
              } else {
                navigate("/gym/gymexercise");
              }
            }}
            variant="contained"
            sx={{
              backgroundColor: "black",
              position: "absolute",
              ml: { sm: "38%", lg: "27%" },
              mt: { sm: "69.2%", lg: "36%" },
              color: "white",
            }}
          >
            Start
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default WorkoutRoutine;
