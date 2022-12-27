import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Box,Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useContext } from "react";
import { Update } from "../App";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import workout from '../assets/images/workout.png'
import barbell from '../assets/images/barbell.png'
import yoga from '../assets/images/yoga.png'
const url =require('url')
const Navbar = () => {
  const location = useLocation();
  const { Color, textColor, nav, verify } = useContext(Update);
  const [boxShadow, setboxShadow] = useState("none");
  const [border, setBorder] = useState(`3px ${Color} solid`);
  const [rotate, setRotate] = useState("1800deg");
  const [displayDropMenu,setDisplayDropMenu]=useState("none")
  const [displayAppBar,setDisplayAppBar]=useState("none")
  window.onscroll = () => {
    if (document.documentElement.scrollTop < 10) {
      setboxShadow("none");
    } else {
      setboxShadow("");
    }
  };
  return (
    <AppBar
    
      component="nav"
      position="sticky"
      style={{ display:{displayAppBar},boxShadow: boxShadow, backgroundColor: "white", height: "60px", }}
    >
      <Stack
        position="fixed"
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "20px", lg: "20px" },
          justifyContent: "none",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "36px",
              height: "40px",
              marginLeft: "25px",
              mb: "1px",
            }}
          />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItem="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: textColor,
              borderBottom: location.pathname === "/" ? border : "",
            }}
            onClick={() => {
              setBorder(`3px ${Color} solid`);
            }}
          >
            Home
          </Link>

          <Link
            to="/explore"
            style={{
              textDecoration: "none",
              color: textColor,
              borderBottom: location.pathname === "/explore" ? border : "",
            }}
            onClick={() => {
              setBorder(`3px ${Color} solid`);
            }}
          >
            Explore
          </Link>
          <Box position="relative" sx={{}}>
          <Link
            to="/workout"
            style={{
              
              textDecoration: "none",
              color: textColor,
              borderBottom: location.pathname === "/workout" ? border : "",
            }}
            fontSize={20}
            onClick={() => {
              if (rotate == "180deg") 
            {
              setRotate("0deg");
              setDisplayDropMenu("block")
            }
              else 
              {
                setRotate("180deg");
                setDisplayDropMenu("none")
              }
            }}
          >
            Workout
            <ExpandMoreIcon sx={{ rotate: rotate,width:50,transitionDuration:"1s"}} />
          </Link>
          <Stack direction="column" sx={{ marginTop:"12px",boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)"}}>
          <Link to="/yoga" style={{marginTop:"10px",textDecoration:"none",display:displayDropMenu,borderTop:"3px solid #FF9933",textAlign:"center",color:"#FF9933",borderBottom:"1px solid #FF9933",boxShadow:"0 0 10px 5px #FF9933"}}>Yoga <img src={yoga}/></Link>
          <Link to="/gym" style={{marginTop:"10px",textDecoration:"none",display:displayDropMenu,borderTop:"3px solid red",color:"red",textAlign:"center",borderBottom:"1px solid red",boxShadow:"0 0 10px 5px red"}}>Gym <img src={barbell}/></Link>
          <Link to="/homeworkout" style={{marginTop:"10px",textDecoration:"none",display:displayDropMenu,textAlign:"center",borderTop:"3px solid blue",borderBottom:"1px solid blue",color:"indigo",boxShadow:"0 0 10px 5px blue"}}>Home <img src={workout} /> </Link>

          </Stack>
          </Box>
          <Link
            to="/dashboard"
            onClick={() => {
              setBorder(`3px ${Color} solid`);
            }}
            style={{
              textDecoration: "none",
              color: textColor,
              borderBottom: location.pathname === "/dashboard" ? border : "",
            }}
          >
            Dashboard
          </Link>
          <Stack sx={{ ml: { sm: "35px", lg: "700px" } }}>
            <Link
              to={nav}
              onClick={() => {
                setBorder(`3px ${textColor} solid`);
              }}
              style={{
                textDecoration: "none",
                color: textColor,
                fontWeight: 550,
                marginTop: 2,
              }}
            >
              {verify}
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
