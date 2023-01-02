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
      <img
        src={Carddetail.image}
        style={{ borderTopRightRadius: "16px", borderTopLeftRadius: "16px" }}
      />

      <Typography
        sx={{
          color: "white",
          border: "none",
          position: "absolute",
          
          top: { sm: "49.4%", lg: "18%" },
          left: { sm: "14.8%", lg: "16%" },
          fontSize: "25px",
          fontWeight: "800",
        }}
      >
        {Carddetail.caption}
      </Typography>

      
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
          <Stack sx={{ ml: "10px",padding:"0px 15px" }}>
            <Typography sx={{textAlign:"center", fontSize: "26px", color: "#222222", fontWeight: "500" }}>
          0  </Typography>
            <Typography sx={{ fontSize: "12px", color: "grey" }}>
              {Carddetail.label1}
            </Typography>
          </Stack>
          <Stack  sx={{ml: "10px",padding:"0px 15px"}} >
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
