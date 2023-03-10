import {
  Box,
  Button,
  TextField,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Update } from "../../App";
import { images, time } from "./GymInfo";
import SentimentVeryDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentVeryDissatisfiedTwoTone";
import MoodTwoToneIcon from "@mui/icons-material/MoodTwoTone";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";
import { UserC } from "../../components/FitFinderInfo";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import Cookies from "js-cookie";
const GymResult = ({ pathIndex }) => {
  let userc = new UserC();
  const navigate = useNavigate();
  const date = new Date();
  const [value, setValue] = useState();
  const { setDisplayAppBar,gymResultargs } = useContext(Update);
  const location = useLocation();
  const height = useRef();
  const weight = useRef();
  const data = useRef();
  const d = useRef();
  useEffect(() => {
    if (location.pathname === "/gym/gymresult") {
      setDisplayAppBar("none");
    }
    async function getData() {
      console.log(gymResultargs)
      let a;
      try {
        a = await getDoc(doc(db, "UserData", `${Cookies.get("_hash")}`));
        a = a.data();

        // if (
        //   a[
        //     `${date.getFullYear()}` +
        //       [date.getMonth() + 1] +
        //       [date.getDate() + 1]
        //   ]
        // ) {
        //   data.current =
        //     a[
        //       `${date.getFullYear()}` +
        //         [date.getMonth() + 1] +
        //         [date.getDate() + 1]
        //     ]["exercise"];
        //   console.log(1);
        // } else {
        //   data.current = ["2"];
        //   console.log(2);
        // }
            } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <Box
      sx={{
        m: { sm: "5px 0% 0px 8%", lg: "5px 0% 0% 15%" },
        width: { sm: "650px", lg: "900px" },
        height: { sm: "770px", lg: "750px" },
        boxShadow: "0px 0px 50px 2px grey",
      }}
    >
      <CardContent
        sx={{
          m: { sm: "10% 3%", lg: "5% 2%" },
          position: "absolute",
          color: "white",
        }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: "34px" }}>
          Nice,you've <br /> completed <b /> exercise!
        </Typography>
        <Typography sx={{ mt: "3%", fontSize: "20px" }}>
          {images[pathIndex].title}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "white",
          position: "absolute",
          height: { sm: "10%", lg: "10%" },
          boxShadow: "0px 0px 14px 1px grey",
          mt: { sm: "34%", lg: "17%" },
          ml: { sm: "3%", lg: "3%" },
          display:"flex",
          justifyContent:"left",
          textAlign:"center",
          alignItems:"center",
          borderRadius: "7px",
          width: { sm: "600px", lg: "800px" },
          height:"80px"
        }}
      >
        <Stack direction="row" spacing={20} sx={{textAlign:"center",justifyContent:"center"}}>
         
         <CardContent sx={{mb:"10px"}}> <Typography>Exercise</Typography>
         <Typography >{gymResultargs[0]}</Typography></CardContent>
         <CardContent>
          <Typography >Calorie</Typography>
          <Typography >{gymResultargs[1]}</Typography>
          </CardContent>
          <CardContent><Typography >Time</Typography>
          <Typography>{gymResultargs[2]}</Typography>

          </CardContent>

        </Stack>
      </CardContent>
      <CardMedia
        sx={{ height: "40%" }}
        component="img"
        src={images[pathIndex].image}
      />
      <CardContent
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 0px 14px 1px grey",
          borderRadius: "7px",
          mt: { sm: "13%", lg: "10%" },
          ml: { sm: "4.2%", lg: "5.7%" },
          width: { sm: "600px", lg: "800px" },
        }}
      >
        <Typography sx={{ display: "inline" }}>Weight:</Typography>
        <TextField
          type="number"
          variant="filled"
          inputRef={weight}
          placeholder="Weight in Kg"
          size="small"
          sx={{ width: "150px" }}
        />
        <Typography sx={{ display: "inline", ml: "15%" }}>Height:</Typography>
        <TextField
          type="number"
          variant="filled"
          inputRef={height}
          placeholder="Height in Ft"
          size="small"
          sx={{ ml: "5%", width: "150px" }}
        />
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 0px 14px 1px grey",
          borderRadius: "7px",
          mt: { sm: "5%", lg: "4%" },
          ml: { sm: "4.2%", lg: "5.7%" },
          width: { sm: "600px", lg: "800px" },
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          How do you feel
        </Typography>
        <Typography sx={{ color: "grey" }}>
          Your valuable feedback will assist us in tailoring our workouts to
          better meet your individual needs and preferences.
        </Typography>
        <Stack direction="row" sx={{ m: { sm: "1% 30%", lg: "1% 35%" } }}>
          <Button sx={{ color: "red" }}>
            <SentimentVeryDissatisfiedTwoToneIcon fontSize="large" />
          </Button>
          <Button sx={{ color: "green" }}>
            <MoodTwoToneIcon fontSize="large" />
          </Button>
          <Button sx={{ color: "blue" }}>
            <SentimentVerySatisfiedTwoToneIcon fontSize="large" />
          </Button>
        </Stack>
      </CardContent>
      <Button
        onClick={() => {
          async function setData() {
            // try {
            //   d.current = `${
            //     `${date.getFullYear()}` +
            //     [date.getMonth() + 1] +
            //     [date.getDate()]
            //   }`;
            //   // d.current=d.current.stringify()
            //   await setDoc(
            //     doc(db, Cookies.get("_hash"), "_dash"),
            //     {
            //       d: {
            //         year: date.getFullYear(),
            //         month: date.getMonth() + 1,
            //         date: date.getDate() + 1,
            //         weight: weight.current.value,
            //         height: height.current.value,
            //         // exercise: [Cookies.get("_#*_")]
            //       },
            //     },
            //     { merge: "true" }
            //   );
            // } catch (err) {
            //   console.log(err);
            // }
          }
          setData();
          // navigate("/gym/discovergym");
        }}
        variant="contained"
        className="GymResultButton"
        sx={{ ml: { sm: "42%", lg: "44%" }, mt: "3%" }}
      >
        Done
      </Button>
    </Box>
  );
};

export default GymResult;
