import { Box, Stack,Typography } from '@mui/material'
import React from 'react'

const WorkoutCollection = ({pathexercise}) => {
  return (
    <Box sx={{m:{sm:"10px 0px",lg:"15px 0px"},border:"1px solid blue"}}>
        <Stack direction="row">
     <img src={pathexercise.gifUrl} 
     style={{display:"inline-block",width:"275px",height:"200px"}}
     />
     <Box sx={{width:"50%"}}>
     <Typography sx={{display:"block",fontWeight:"600",fontSize:{sm:"26px",lg:"30px"},ml:"10%"}}>{pathexercise.name}</Typography>
     <Typography sx={{color:"grey",ml:[pathexercise.ml],fontSize:{sm:"23px",lg:"25px"},mt:"5px",mb:"15px"}}>{pathexercise.reps}</Typography>
     <Typography sx={{color:"#343a40",display:"inline",fontWeight:"600",fontSize:{sm:"20px",lg:"22px"},ml:"10%"}}>BodyPart</Typography>
     <Typography sx={{color:"#343a40",display:"inline",fontWeight:"600",fontSize:{sm:"20px",lg:"22px"},ml:{sm:"15%",lg:"20%"}}}>Equipment</Typography>
    <br/>
    <Typography sx={{color:"red",display:"inline",fontWeight:"600",fontSize:{sm:"20px",lg:"22px"},ml:"10%"}}>{pathexercise.bodyPart}</Typography>
     <Typography sx={{color:"green",display:"inline",fontWeight:"600",fontSize:{sm:"20px",lg:"22px"},ml:{sm:"24%",lg:"25.4%"}}}>{pathexercise.equipment}</Typography>
     </Box>
     </Stack>
    </Box>
  )
}

export default WorkoutCollection
