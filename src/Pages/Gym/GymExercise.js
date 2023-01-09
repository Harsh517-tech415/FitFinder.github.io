import { Box, Typography,Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {Update} from '../../App'
import { exercisebeginner } from './GymInfo'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
const GymExercise = ({pathIndex}) => {
    const exerciseDetail=exercisebeginner[pathIndex];
    const {setDisplayAppBar}=useContext(Update)
    const [option,setOption]=useState(0)
    const [index,setIndex]=useState(0)
    const [display,setDisplay]=useState("")
    const [disable,setDisable]=useState(true)
    const location=useLocation()
  useEffect(()=>{
    if(location.pathname==="/gym/gymexercise")
    {setDisplayAppBar("none")}
    // console.log(exerciseDetail[index].name)
  },[])
  useEffect(()=>{exerciseDetail[index].side===0?setDisplay("none"):setDisplay("block"); index===0?setDisable(true):setDisplay(false)},[index])
    return (
    <>
    {option===0?
    <Box sx={{backgroundColor:"white",m:{sm:"2px 0% 0px 6.5%",lg:"5px 20% 0% 15%"},width:{sm:"650px",lg:"900px"},height:{sm:"770px",lg:"750px"},boxShadow:"0px 0px 50px 2px grey"}}>
        <CardMedia
        sx={{display:"inline",m:{sm:"2% 25% 0% 25%",lg:"1.5% 20% 0% 22%"},width:{sm:"300px",lg:"500px"},height:{sm:"360px",lg:"450px"}}} 
        component="img"
         src={exerciseDetail[index].gifUrl}/>
         <CardContent>
            <Typography sx={{m:{sm:"10px 0px 0px 0px",lg:"10px 0px 0px 0px"},textAlign:"center",fontSize:"24px",fontWeight:"800"}}>{exerciseDetail[index].name}</Typography>
            <Typography sx={{display:{display},color:"grey",m:{sm:"5% 0% 0% 43.2%",lg:"2% 0% 0% 45%"}}}>Each Side x{exerciseDetail[index].side}</Typography>        
            <Typography sx={{fontWeight:"600",fontSize:"34px",m:{sm:"5% 0% 0% 46%",lg:"2% 0% 0% 47%"}}}>{exerciseDetail[index].reps}</Typography>        
            <Button variant="contained" color="error" sx={{width:"200px",height:"50px",borderRadius:"30px",m:{sm:"3% 36%",lg:"3% 39.5%"}}}>Done</Button>
            <Button color="error"  disabled={disable} sx={{fontSize:"18px",m:{sm:"0% 10% 0% 30%"}}}><SkipPreviousRoundedIcon fontSize="large"/>Previous</Button>
            <Button color="error" sx={{fontSize:"18px"}}>Skip<SkipNextRoundedIcon fontSize="large"/></Button>
         </CardContent>
    </Box>
    :<Box></Box>}
    </>
  )
}

export default GymExercise
