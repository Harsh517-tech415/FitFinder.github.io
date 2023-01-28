import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import { Stack } from "@mui/material";
import GymCard from "../../components/GymCard";
import {ChallengeC} from "../../components/FitFinderInfo";
import {BeginnerC} from "../../components/FitFinderInfo";
import {IntermediateC} from "../../components/FitFinderInfo";
import {AdvanceC} from "../../components/FitFinderInfo";
import { UserC } from "../../components/FitFinderInfo";

const Discover = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const beginnerc=new BeginnerC();
  const intermediatec=new IntermediateC();
  const advancec=new AdvanceC();
  const challengec=new ChallengeC();
  const userc=new UserC();
  const [challenge,setChallenge]=useState([])
  const [Beginner,setBeginner]=useState([])
  const [Intermediate,setIntermediate]=useState([])
  const [Advance,setAdvance]=useState([])
  const [data1,setData]=useState([])
  let data;

  useEffect(() => {
    if (location.pathname === "/gym/discovergym") {
      setDisplayAppBar("none");
    }
    async function storeData()
    {
try{
  let a=document.cookie;
  const [name,idValue]=a.split("=");
  data=await userc.getDocData(idValue);
setData(data.data());
// console.log(data1)
}
catch(err){console.log(err)}
    }
    storeData()
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
        
         <GymCard  Carddetail={item.data()} data1={data1}/>
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
          <GymCard Carddetail={item.data()} data1={data1}/>
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
          <GymCard Carddetail={item.data()} data1={data1} />
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
          <GymCard Carddetail={item.data()} data1={data1}/>
        ))}
      </Stack>
    </div>
  );
};

export default Discover;
