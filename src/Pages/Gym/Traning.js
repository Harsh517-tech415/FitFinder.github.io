import { Box,Button } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import peakpx from '/home/monster/Documents/MyWealthApp/src/assets/images/peakpx.jpg'
import { Stack } from '@mui/material';
const Traning = () => {

  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/traninggym") {
      setDisplayAppBar("none");
     }
  }, []);
  function slideLeft(){
    const slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft-1760;
  }
  function slideRight(){
    const slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+1760;
  }
  return (
    <Stack direction="column">
    <Stack id="slider" direction ="row" style={{overflowX:"scroll",scrollbar:"hidden"}}>
      <img src={peakpx} style={{width:"1760px",height:"860px"}}/>
      <img src={peakpx} style={{width:"1760px",height:"860px"}}/>
      <img src={peakpx} style={{width:"1760px",height:"860px"}}/>
      <img src={peakpx} style={{width:"1760px",height:"860px"}}/>
     </Stack>
<KeyboardArrowLeftIcon onClick={slideLeft} sx={{backgroundColor:"transparent"}}/><KeyboardArrowRightIcon onClick={slideRight}sx={{backgroundColor:"transparent"}}/>
     </Stack>
  )
}

export default Traning