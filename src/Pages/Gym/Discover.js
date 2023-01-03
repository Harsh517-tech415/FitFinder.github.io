import { Box, Button,Typography } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import FullBody from "../../assets/images/FullBody.jpg";
import LowerBody from "../../assets/images/LowerBody.jpg";
import { Stack } from '@mui/material';
import GymCard from '../../components/GymCard';
import chest1 from '../../assets/images/chest1.jpg'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Discover = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/discovergym") {
      setDisplayAppBar("none");
     }
  }, []);
  const Beginner=
  [{
    label1:"Workout",
    label2:"KCAL",
    caption:"ABS",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"0px"
  },]
  const challenge=[
    {
    label1:"Workout",
    label2:"KCAL",
    caption:"FULL BODY",
    image:FullBody,
    beginner:"none",
    intermediate:"none",
    advance:"none",
    ml:"75px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"LOWER BODY",
    image:LowerBody,
    beginner:"none",
    intermediate:"none",
    advance:"none",
    ml:"60px"
  }
];
function slideLeft()
{
  const slider=document.getElementById('slider');
  slider.scrollLeft=slider.scrollLeft+100;
}
function slideRight(){
  const slider=document.getElementById("slider");
  slider.scrollLeft=slider.scrollLeft-100;
}
  return (
    <div >
         <Typography sx={{margin: {
              sm: "100px 0px 20px 62.286px",
              lg: "100px 0px 20px 260.857px ",
            },fontSize:"30px",fontWeight:"600",color:'rgba(0, 0, 0, 0.65)'}}>
            7x4 CHALLENGE 
          </Typography>
          <Stack direction="row" sx={{margin: {
          sm: "0px 0px 0px 62.286px",
          lg: "0px 0px 0px 260.857px ",
        }}}>
          {challenge.map((item)=>(
         
         <GymCard  Carddetail={item} />
          ))} 
          </Stack>
          <Typography sx={{margin: {
              sm: "100px 0px 20px 62.286px",
              lg: "100px 0px 20px 260.857px ",
            },fontSize:"30px",fontWeight:"600",color:'rgba(0, 0, 0, 0.65)'}}>
            Beginner
          </Typography>
          <Stack direction="row">
            {/* <Button variant="contained" sx={{ml:{lg:"100px"},mr:{lg:"20px"},backgroundColor:"transparent"}}
            onClick={slideLeft}> */}
{/* <KeyboardArrowLeftIcon /> */}
{/* </Button> */}
        <Stack direction="row" id="slider" sx={{overflowX:"scroll"
        // ,margin: {
        //   sm: "0px 0px 0px 62.286px",
        //   lg: "0px 0px 0px 260.857px ",
        // }
      }
        }>
          {Beginner.map((item)=>(
            <GymCard Carddetail={item}/>
          ))}

        </Stack>
        {/* <Button variant="contained" sx={{backgroundColor:"transparent"}}
        onClick={slideRight}>
        <KeyboardArrowRightIcon /></Button> */}
        </Stack>
    </div>
  )
}

export default Discover