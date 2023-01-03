import { Box, Stack, Typography,Button } from "@mui/material";
import React, { useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const GymCard = ({ Carddetail }) => {
  //   useEffect(()=>{(props.Carddetail)},[])
  return (
  
    <Box
      sx={{
        width: "275px",
        height: "284px",
        margin: {
          sm: "0px 0px 0px 62.286px",
          lg: "0px 0px 0px 260.857px ",
        },
        boxShadow: "0px 0px 20px 1px grey",
        borderRadius: "16px",
    }}
    >
    <Typography
  sx={{color: "red",
        border: "none",    
        margin:{sm:"180px 0px 0px 8%",lg:"180px 0px 0px 3.5%"},      
      //   top: { sm: "49.4%", lg: "18%" },
      //   left: { sm: "14.8%", lg: "16%" },
        fontSize: "18px",
        fontWeight: "1000",position:"absolute"}}>
      {Carddetail.caption}
    </Typography>
    
      <img
        src={Carddetail.image}
        style={{ borderTopRightRadius: "16px", borderTopLeftRadius: "16px" }}
      />
      <Box
        style={{
          backgroundColor: "white",
          width: "275px",
          height: "84px",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
        //   display:"inline"
        }}
      >
              
        <Stack direction="row">
          <Stack className="countWorkout" sx={{ mt:"17px",ml: {sm:"35px",lg:"28px"},padding:"0px 15px" }}>
            <Typography sx={{textAlign:"center", fontSize: "26px", color: "#222222", fontWeight: "500" }}>
          0  </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              {Carddetail.label1}
            </Typography>
            {/* <Typography className="workoutMessage" sx={{width:"300px",margin:"10px 0px 0px -35px ",display:"none",backgroundColor:"white",boxShadow:"0px 0px 11px 2px grey",borderRadius:"10px"}}>A single complete round will be counted as one workout session.</Typography> */}
          </Stack>
          <Stack  sx={{mt:"17px",ml: "20px",padding:"0px 15px"}} >
          <Typography sx={{ textAlign:"center",fontSize: "26px", color: "#222222", fontWeight: "500" }}>
          0  </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              {Carddetail.label2}
            </Typography>
          </Stack>
        </Stack>
        </Box>
        <Button
          sx={{
            margin: "-194px 0px 0px 200px",
            width: "70px",
            height: "70px",
            color: "black",
            borderRadius: "100px",
            border: "9px solid #eeeeee",
            
          }}
        >
          <PlayArrowIcon className="playButton" />
        </Button>
    </Box>
  );
};

export default GymCard;
