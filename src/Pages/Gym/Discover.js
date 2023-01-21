import { Box, Button,Typography } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import { Stack } from '@mui/material';
import GymCard from '../../components/GymCard';
import {Beginner} from './GymInfo'
import {Intermediate} from './GymInfo'
import {Advance} from './GymInfo'
import {challenge} from './GymInfo'
  
const Discover = () => {
  
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/discovergym") {
      setDisplayAppBar("none");
     }
    
    }, []);
  

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