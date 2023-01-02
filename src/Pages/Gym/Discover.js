import { Box, Typography } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import FullBody from "../../assets/images/FullBody.jpg";
import LowerBody from "../../assets/images/LowerBody.jpg";
import { Stack } from '@mui/material';
import GymCard from '../../components/GymCard';
const Discover = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/discovergym") {
      setDisplayAppBar("none");
     }
  }, []);
  const challenge=[
    {
    label1:"Workout",
    label2:"KCAL",
    caption:"FULL BODY",
    image:FullBody
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"LWER BODY",
    image:LowerBody
  }
]
  return (
    <div >
         <Typography sx={{margin: {
              sm: "100px 0px 20px 62.286px",
              lg: "0px 0px 20px 260.857px ",
            },fontSize:"30px",fontWeight:"600",color:'rgba(0, 0, 0, 0.65)'}}>
            7x4 CHALLENGE 
          </Typography>
          <Stack direction="row">
          {challenge.map((item)=>(
         
         <GymCard  Carddetail={item} />
          ))} 
          </Stack>
        
    </div>
  )
}

export default Discover