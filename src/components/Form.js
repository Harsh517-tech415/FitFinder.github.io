import React, { useContext, useState } from "react";
import { Button,Box } from "@mui/material";
import { Stack } from "@mui/system";
import BasicInfo from "./BasicInfo";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HealthInfo from './HealthInfo'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
const Form = () => {
  const [borderColor, setBorderColor] = useState("red");
  const [boxShadow, setBoxShadow] = useState("0px 0px 6px 5px red");
  const sliderRight = () => {
    let slider=document.getElementById("slider")
    slider.scrollLeft=slider.scrollLeft+1600;
  };
  const sliderLeft = () => {
    let slider=document.getElementById("slider")
    slider.scrollLeft=slider.scrollLeft - 1600;
  };
  return (
    <>
    <Stack direction="column">
      <button
        style={{
          marginTop: "80px",
          marginLeft: "120px",
          width: "10px",
          height: "10px",
          borderRadius: "1000px",
          borderWidth: "1px",
          borderBlockColor:borderColor,
          boxShadow: boxShadow,
        }}></button>
     <div id="slider" 
       style={{display:"flex",
       overflowX:"scroll",
       overflow:"hidden",
       scroll:"smooth"
       
       }}> 
        <BasicInfo />
        <Box 
        width="500px"
       height="350px"></Box>
        <HealthInfo/>
        </div>
        </Stack>

<Button  onClick={()=>{sliderLeft()}} size="small" variant="outlined" color="error"  sx={{size:"small"}}>Back</Button>
<Button  onClick={()=>{sliderRight()}} size="small" variant="outlined" color="error" sx={{ml:{sm:"600px"}}}>Next</Button>
</>
  )
};

export default Form;
