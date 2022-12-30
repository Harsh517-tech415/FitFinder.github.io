import { Box,Button } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import peakpx from '/home/monster/Documents/MyWealthApp/src/assets/images/peakpx.jpg'
import { Stack } from '@mui/material';
import CarouselFadeExample from '../../components/Carousel';
const Traning = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/traninggym") {
      setDisplayAppBar("none");
     }
  }, []);
 

  return (
    <div>
      <CarouselFadeExample />
    </div>
  )
}

export default Traning