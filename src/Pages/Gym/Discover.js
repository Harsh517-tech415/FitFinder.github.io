import { Box, Button,Typography } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import FullBody from "../../assets/images/FullBody.jpg";
import LowerBody from "../../assets/images/LowerBody.jpg";
import { Stack } from '@mui/material';
import GymCard from '../../components/GymCard';
import chest1 from '../../assets/images/chest1.jpg'
import chest2 from '../../assets/images/chest2.jpg'
import chest3 from '../../assets/images/chest3.png'
import abs1 from '../../assets/images/abs1.jpg'
import abs2 from '../../assets/images/abs2.jpg'
import abs3 from '../../assets/images/abs3.webp'
import arm1 from '../../assets/images/arm1.webp'
import arm2 from '../../assets/images/arm2.jpg'
import arm3 from '../../assets/images/arm3.webp'
import leg1 from '../../assets/images/leg1.jpg'
import leg2 from '../../assets/images/leg2.jpg'
import leg3 from '../../assets/images/leg3.webp'
import back1 from '../../assets/images/back1.jpg'
import back2 from '../../assets/images/back2.webp'
import back3 from '../../assets/images/back3.webp'

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
    image:abs1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:arm1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:leg1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    // ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:back1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"0px"
  },]
  const Intermediate=
  [{
    label1:"Workout",
    label2:"KCAL",
    caption:"ABS",
    image:abs2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:arm2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:leg2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    // ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:back2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    ml:"0px"
  },]
  const Advance=
  [{
    label1:"Workout",
    label2:"KCAL",
    caption:"ABS",
    image:abs3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:arm3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:leg3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:back3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"0px"
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
    // ml:"75px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"LOWER BODY",
    image:LowerBody,
    beginner:"none",
    intermediate:"none",
    advance:"none",
    // ml:"60px"
  }
]
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
          sm: "0px 0px 20px 62.286px",
          lg: "0px 0px 20px 260.857px ",
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
            
        <Stack direction="row" className="DiscoverScrollbar" sx={{p:"10px 0px",ml:{sm:"62.286px",lg:"260.857px"},overflowX:"scroll"}}>
          {Beginner.map((item)=>(
            <GymCard Carddetail={item}/>
          ))}
        </Stack>
<Typography sx={{margin: {
              sm: "100px 0px 20px 62.286px",
              lg: "100px 0px 20px 260.857px ",
            },fontSize:"30px",fontWeight:"600",color:'rgba(0, 0, 0, 0.65)'}}> Intermediate</Typography>
        <Stack direction="row" className="DiscoverScrollbar" sx={{p:"10px 0px",ml:{sm:"62.286px",lg:"260.857px"},overflowX:"scroll"}}>
          {Intermediate.map((item)=>(
            <GymCard Carddetail={item}/>
          ))}
        </Stack>
        
        <Typography sx={{margin: {
              sm: "100px 0px 20px 62.286px",
              lg: "100px 0px 20px 260.857px ",
            },fontSize:"30px",fontWeight:"600",color:'rgba(0, 0, 0, 0.65)'}}> Advance</Typography>
        <Stack direction="row" className="DiscoverScrollbar" sx={{p:"10px 0px",ml:{sm:"62.286px",lg:"260.857px"},overflowX:"scroll"}}>
          {Advance.map((item)=>(
            <GymCard Carddetail={item}/>
          ))}
        </Stack>
    </div>
  )
}

export default Discover
{/* <Button variant="contained" sx={{ml:{lg:"100px"},mr:{lg:"20px"},backgroundColor:"transparent"}}
            onClick={slideLeft}> */}
{/* <KeyboardArrowLeftIcon /> */}
{/* </Button> */}



  {/* <Button variant="contained" sx={{backgroundColor:"transparent"}}
        onClick={slideRight}>
        <KeyboardArrowRightIcon /></Button> */}