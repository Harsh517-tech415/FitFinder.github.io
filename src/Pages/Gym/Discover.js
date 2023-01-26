import { Box, Button, Typography } from "@mui/material";
import React, { useContext,useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import { Stack } from "@mui/material";
import GymCard from "../../components/GymCard";

import chest1 from "../../assets/images/chest1.jpg";
import chest2 from "../../assets/images/chest2.jpg";
import chest3 from "../../assets/images/chest3.png";
import abs1 from "../../assets/images/abs1.jpg";
import abs2 from "../../assets/images/abs2.jpg";
import abs3 from "../../assets/images/abs3.webp";
import arm1 from "../../assets/images/arm1.webp";
import arm2 from "../../assets/images/arm2.jpg";
import arm3 from "../../assets/images/arm3.webp";
import leg1 from "../../assets/images/leg1.jpg";
import leg2 from "../../assets/images/leg2.jpg";
import leg3 from "../../assets/images/leg3.webp";
import back1 from "../../assets/images/back1.jpg";
import back2 from "../../assets/images/back2.webp";
import back3 from "../../assets/images/back3.webp";
import FullBody from "../../assets/images/FullBody.jpg";
import LowerBody from "../../assets/images/LowerBody.jpg";
// import db from '../../components/firebase'
import {ChallengeC} from "../../components/FitFinderInfo";
import {BeginnerC} from "../../components/FitFinderInfo";
import {IntermediateC} from "../../components/FitFinderInfo";
import {AdvanceC} from "../../components/FitFinderInfo";

const Discover = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const beginnerc=new BeginnerC;
  const intermediatec=new IntermediateC;
  const advancec=new AdvanceC;
  const challengec=new ChallengeC;
  const [challenge,setChallenge]=useState([])
  const [Beginner,setBeginner]=useState([])
  const [Intermediate,setIntermediate]=useState([])
  const [Advance,setAdvance]=useState([])


  useEffect(() => {
    if (location.pathname === "/gym/discovergym") {
      setDisplayAppBar("none");
    }
async function getData1()
{
  try{
const c=await challengec.getDocsData();
setChallenge(c.docs)
}catch(error){console.log("error")}}
async function getData2()
{
try{
  const b=await beginnerc.getDocsData();
  setBeginner(b.docs)
  
}
catch(err){console.log("error")}}
async function getData3()
{
try{
  const i=await intermediatec.getDocsData();
  setIntermediate(i.docs)

}
catch(err){console.log("error")}
}
async function getData4()
{try{
  const a=await advancec.getDocsData();
  setAdvance(a.docs)

}
catch(err){console.log("error")}}
getData1();
getData2();
getData3();
getData4();
  }, []);

  return (
    <div>
      <Typography
        sx={{
          margin: {
            sm: "100px 0px 20px 62.286px",
            lg: "100px 0px 20px 260.857px ",
          },
          fontSize: "30px",
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.65)",
        }}
      >
        7x4 CHALLENGE
      </Typography>
      <Stack
        direction="row"
        sx={{
          margin: {
            sm: "0px 0px 20px 62.286px",
            lg: "0px 0px 20px 260.857px ",
          },
        }}
      >
      {challenge.map((item)=>(
         <GymCard  Carddetail={item.data()} />
          ))} 
      </Stack>
      <Typography
        sx={{
          margin: {
            sm: "100px 0px 20px 62.286px",
            lg: "100px 0px 20px 260.857px ",
          },
          fontSize: "30px",
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.65)",
        }}
      >
        Beginner
      </Typography>

      <Stack
        direction="row"
        className="DiscoverScrollbar"
        sx={{
          p: "10px 0px",
          ml: { sm: "62.286px", lg: "260.857px" },
          overflowX: "scroll",
        }}
      >
        {Beginner.map((item) => (
          <GymCard Carddetail={item.data()} />
        ))}
      </Stack>
      <Typography
        sx={{
          margin: {
            sm: "100px 0px 20px 62.286px",
            lg: "100px 0px 20px 260.857px ",
          },
          fontSize: "30px",
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.65)",
        }}
      >
        {" "}
        Intermediate
      </Typography>
      <Stack
        direction="row"
        className="DiscoverScrollbar"
        sx={{
          p: "10px 0px",
          ml: { sm: "62.286px", lg: "260.857px" },
          overflowX: "scroll",
        }}
      >
        {Intermediate.map((item) => (
          <GymCard Carddetail={item.data()} />
        ))}
      </Stack>

      <Typography
        sx={{
          margin: {
            sm: "100px 0px 20px 62.286px",
            lg: "100px 0px 20px 260.857px ",
          },
          fontSize: "30px",
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.65)",
        }}
      >
        {" "}
        Advance
      </Typography>
      <Stack
        direction="row"
        className="DiscoverScrollbar"
        sx={{
          p: "10px 0px",
          ml: { sm: "62.286px", lg: "260.857px" },
          overflowX: "scroll",
        }}
      >
        {Advance.map((item) => (
          <GymCard Carddetail={item.data()} />
        ))}
      </Stack>
    </div>
  );
};

export default Discover;
