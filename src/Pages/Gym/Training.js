import { Card, CardContent, Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import Carousel from "../../components/Carousel";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import Cookies from "js-cookie";
const Training = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const [option, setOption] = useState(0);
  const [value, setValue] = useState(0);

  let data;
  const workout = useRef(0),
    kcal = useRef(0),
    time = useRef(0);

  useEffect(() => {
    if (location.pathname === "/gym/traninggym") {
      setDisplayAppBar("none");
    }
    setOption(1)
  }, []);
  useEffect(()=>{if(option===1){
    async function getData() {
      try {
        data = await getDoc(doc(db, "UserData", Cookies.get("_hash")));
        data = data.data();
        Object.keys(data).map((item) => {
          if (item === "name" || item === "workout") {
          } else {
            workout.current = workout.current + data[item][0];
            kcal.current = kcal.current + data[item][1];
            time.current = time.current + data[item][2];
          }
        });
        setValue(1);
      } catch (err) {
        console.log(err);
      }
    }
    if (option === 1) {
      getData();
      setOption(0);
    }
    else if(option===0){}
  }},[option])
  return (
    <>
      <Carousel />
      <Stack
        spacing={{ xs: 1, sm: 3, md: 4, lg: 5 }}
        direction="row"
        sx={{
          mt: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card>
          <CardContent
            sx={{
              textShadow: "0px 0px 11px red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { sm: "150px", md: "200px", lg: "250px" },
              fontSize: { sm: "28px", md: "34px", lg: "40px" },
            }}
          >
            Workouts
            <FitnessCenterIcon
              sx={{
                ml: "5%",
                fontSize: { sm: "24px", md: "28px", lg: "32px" },
              }}
            />
          </CardContent>
          <CardContent sx={{display:"flex",justifyContent:"center",fontSize:{sm:"24px",md:"28px",lg:"32px"}}}>{workout.current}</CardContent>
        </Card>
        <Card>
          <CardContent
            sx={{
              textShadow: "0px 0px 11px 11px red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { sm: "150px", md: "200px", lg: "250px" },
              fontSize: { sm: "28px", md: "34px", lg: "40px" },
              textShadow: "0px 0px 21px  green",
            }}
          >
            Kcal{" "}
            <WhatshotIcon
              sx={{
                ml: "5%",
                fontSize: { sm: "24px", md: "28px", lg: "32px" },
              }}
            />
          </CardContent>
          <CardContent sx={{display:"flex",justifyContent:"center",fontSize:{sm:"24px",md:"28px",lg:"32px"}}}>{kcal.current}</CardContent>
        </Card>
        <Card>
          <CardContent
            sx={{
              textShadow: "0px 0px 11px 11px red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { sm: "150px", md: "200px", lg: "250px" },
              fontSize: { sm: "28px", md: "34px", lg: "40px" },
              textShadow: "0px 0px 21px blue",
            }}
          >
            Time
            <TimerTwoToneIcon
              sx={{
                ml: "5%",
                fontSize: { sm: "24px", md: "28px", lg: "32px" },
              }}
            />
          </CardContent>
          <CardContent sx={{display:"flex",justifyContent:"center",fontSize:{sm:"24px",md:"28px",lg:"32px"}}}>{time.current}</CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default Training;
