import { Box,Button,TextField,CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, { useContext,useState,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Update } from '../../App'
import { exercisebeginner, images,time } from './GymInfo'
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
const GymResult = ({pathIndex}) => {
    const navigate=useNavigate()
    const [value,setValue]=useState()
  const {setDisplayAppBar}=useContext(Update)  
  const location=useLocation()
  useEffect(()=>{
    if(location.pathname==="/gym/gymresult")
    {
setDisplayAppBar("none")
    }
  },[])
    return (
    <Box sx={{
        m: { sm: "5px 0% 0px 8%", lg: "5px 0% 0% 15%" },
        width: { sm: "650px", lg: "900px" },
    height: { sm: "770px", lg: "750px" },
    boxShadow: "0px 0px 50px 2px grey"}}>
        <CardContent sx={{m:{sm:"10% 3%",lg:"5% 2%"},position:"absolute",color:"white"}}><Typography sx={{fontWeight:"600",fontSize:"34px"}}>Nice,you've <br/> completed <b/> exercise!</Typography>
        <Typography sx={{mt:"3%",fontSize:"20px"}}>{images[pathIndex].title}</Typography></CardContent>
        <CardContent sx={{backgroundColor:"white",position:"absolute",height:{sm:"10%",lg:"10%"},boxShadow:"0px 0px 14px 1px grey",mt:{sm:"32%",lg:"15.5%"},ml:{sm:"3%",lg:"3%"},borderRadius:"7px",width:{sm:"600px",lg:"800px"}}}>
        <Stack direction="row">
            <Typography sx={{ml:"16%"}}>
                Exercise
            </Typography>
            <Typography sx={{ml:"20%"}}>
                Calorie
            </Typography>
            <Typography sx={{ml:"22%"}}>
                Time
            </Typography>
        </Stack>
        <Stack direction="row">
            <Typography sx={{ml:"19%"}}>{time[pathIndex]}</Typography>
            <Typography sx={{ml:{sm:"27%",lg:"25%"}}}>0</Typography>
            <Typography sx={{ml:{sm:"30%",lg:"27%"}}}>0</Typography>
        </Stack>
      </CardContent>
      <CardMedia
      sx={{height:"40%"}}
      component="img"
      src={images[pathIndex].image}/>
      <CardContent sx={{backgroundColor:"white",boxShadow:"0px 0px 14px 1px grey",borderRadius:"7px",mt:{sm:"16%",lg:"11%"},ml:{sm:"4.2%",lg:"5.7%"},width:{sm:"600px",lg:"800px"}}}>
        <Typography sx={{fontSize:"24px",fontWeight:"600"}}>
            How do you feel
        </Typography>
        <Typography sx={{color:"grey"}}>
        Your valuable feedback will assist us in tailoring our workouts to better meet your individual needs and preferences.
        </Typography>
      <Stack direction="row" sx={{m:{sm:"1% 30%",lg:"1% 35%"}}}>
        <Button sx={{color:"red"}}><SentimentVeryDissatisfiedTwoToneIcon fontSize="large" /></Button>
        <Button sx={{color:"green"}}><MoodTwoToneIcon fontSize="large"/></Button>
        <Button sx={{color:"blue"}}><SentimentVerySatisfiedTwoToneIcon fontSize="large"/></Button>
      </Stack>
      </CardContent>
    <Button onClick={navigate("/gym/discovergym")} variant="contained" className="GymResultButton" sx={{ml:{sm:"42%",lg:"44%"},mt:"3%" }}>Done</Button>
    </Box>
  )
}

export default GymResult
