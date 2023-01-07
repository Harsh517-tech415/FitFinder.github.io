import React, { useEffect, useContext, useState } from "react";
import { Update } from "../App";
import { useLocation } from "react-router-dom";
import GymInfo, {exercisebeginner} from "../Pages/Gym/GymInfo";
import {exercises} from "../Pages/Gym/GymInfo";
import {time} from "../Pages/Gym/GymInfo";

import image from '../Pages/Gym/GymInfo'
import WorkoutCollection from "../Pages/Gym/WorkoutCollection";
import { Typography,Box,TextField, Stack, Button } from "@mui/material";
import chest1 from '../assets/images/chest1.jpg'
import chest2 from '../assets/images/chest2.jpg'
import chest3 from '../assets/images/chest3.png'
import absb from '../assets/images/absb.jpg'
import abs2 from '../assets/images/abs2.jpg'
import abs3 from '../assets/images/abs3.webp'
import arm1 from '../assets/images/arm1.webp'
import arm2 from '../assets/images/arm2.jpg'
import arm3 from '../assets/images/arm3.webp'
import leg1 from '../assets/images/leg1.jpg'
import leg2 from '../assets/images/leg2.jpg'
import leg3 from '../assets/images/leg3.webp'
import back1 from '../assets/images/back1.jpg'
import back2 from '../assets/images/back2.webp'
import back3 from '../assets/images/back3.webp'
import FullBody from "../assets/images/FullBody.jpg";
import LowerBody from "../assets/images/LowerBody.jpg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const WorkoutRoutine = () => {
  
  const [rest,setRest]=useState(10)
  const workouts=[0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  const image=[FullBody,LowerBody,absb,abs2,abs3,chest1,chest2,chest3,arm1,arm2,arm3,leg1,leg2,leg3,back1,back2,back3];
  const [pathIndex, setPathIndex] = useState(0);
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();

  useEffect(() => {
    exercises.map((value, index) => {
      if (location.pathname === `/gym/${value}`) {
        setDisplayAppBar("none");
        setPathIndex(index);
      }
    });
  }, []);
  return (<>
  <GymInfo />
<Card >
  <CardMedia 
  component="img"
   Height="450px"
  image={image[pathIndex]}
  />
  <CardContent>
    <Typography sx={{ml:{sm:"70px",lg:"265px"},fontWeight:"1000",color:"red",display:"inline"}}>|</Typography>
<Typography sx={{display:"inline",m:"0px 10px ",fontweight:"950",fontSize:{sm:"20px",lg:"23px"}}}>{(time[pathIndex]*rest)/60+time[pathIndex]} min</Typography>
   <Typography sx={{display:"inline",ml:{sm:"50px",lg:"100px"},Weight:"950",fontSize:{sm:"20px",lg:"23px"}}}><FiberManualRecordIcon sx={{width:"10px"}}/>{workouts[pathIndex]} workouts</Typography>
   <Typography sx={{display:"inline",ml:{sm:"50px",lg:"100px"},Weight:"950",fontSize:{sm:"20px",lg:"23px"}}}><FiberManualRecordIcon sx={{width:"10px"}}/>Equipment: Required</Typography>  
  <Typography sx={{display:"inline",ml:{sm:"65px",lg:"300px"},Weight:"950",fontSize:{sm:"20px",lg:"23px"}}}><FiberManualRecordIcon sx={{width:"10px"}}/>RestTime:</Typography>
  <TextField type="number" label="<40sec" 
   onChange={(e)=>{e.target.value=e.target.value % 40; setRest(e.target.value)}} 
   defaultValue={rest} size="small" style={{position:"absolute",width:"65px"}}sx={{display:"inline",ml:"10px"}}/>
  </CardContent>
  </Card>
  <Box sx={{m:{sm:"0px 0px 0px 88px",lg:"0px 275px"}}}>
    <Stack className="DiscoverScrollbar" sx={{height:{sm:"600px",lg:"600px"},overflowY:"scroll"}}>
    {exercisebeginner[pathIndex].map((item)=>(
<WorkoutCollection pathexercise={item} />
      ))} 
      <Button variant="contained" sx={{position:"absolute",ml:{sm:"38%",lg:"27%"},mt:{sm:"70%",lg:"36%"}}}>Start</Button>
    </Stack>
  </Box>

  </>);
};

export default WorkoutRoutine;
