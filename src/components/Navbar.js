import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppBar,Button,Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useContext } from "react";
import { Update } from "../App";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import workout from '../assets/images/workout.png'
import barbell from '../assets/images/barbell.png'
import yoga from '../assets/images/yoga.png'
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import LogoutIcon from '@mui/icons-material/Logout';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Navbar = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const { Color, textColor,setNav, nav,displayAppBar } = useContext(Update);
  const [boxShadow, setboxShadow] = useState("none");
  const [border, setBorder] = useState(`3px ${Color} solid`);
  const [expanded, setExpanded] = useState(false);
  window.onscroll = () => {
    if (document.documentElement.scrollTop < 10) {
      setboxShadow("none");
    } else {
      setboxShadow("");
    }
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
   if(border===""){
    setTimeout(()=>{setBorder(`3px ${Color} solid`)},180)
   }else {
      setBorder('');
    }
  };

  return (
 
    <AppBar
    
      component="nav"
      position="sticky"
      style={{ display:displayAppBar,boxShadow: boxShadow, backgroundColor: "white", height: "60px", }}
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
          <Card position="relative">
          <Stack direction="row"> 
          <Typography  onClick={handleExpandClick} sx={{userSelect: "none",color:"black",fontSize:"22px",cursor:'pointer'}}> 
          Workout
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon/>
            </ExpandMore> 
            </Typography>
            </Stack>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
           <Link to="/yoga" style={{display:"block",marginTop:"10px",textDecoration:"none",borderTop:"3px solid #FF9933",textAlign:"center",color:"#FF9933",borderBottom:"1px solid #FF9933",boxShadow:"0 0 10px 5px #FF9933",borderRadius:"5px"}}>Yoga <img src={yoga} alt="Yoga"/></Link>
          <Link to="/gym" style={{display:"block",marginTop:"10px",textDecoration:"none",borderTop:"3px solid red",color:"red",textAlign:"center",borderBottom:"1px solid red",boxShadow:"0 0 10px 5px red",borderRadius:"5px"}}>Gym <img src={barbell} alt="Gym"/></Link>
          <Link to="/homeworkout" style={{display:"block",marginTop:"10px",textDecoration:"none",textAlign:"center",borderTop:"3px solid blue",borderBottom:"1px solid blue",color:"indigo",boxShadow:"0 0 10px 5px blue",borderRadius:"5px"}}>Home <img src={workout} alt="Home"/> </Link>
          </CardContent>
          </Collapse>
</Card>
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
            {nav===0?<Link
              to={'/signup'}
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
              Sign
            </Link>:<Button color="error" variant="outlined" onClick={()=>{document.cookie="_hash=b229jjcWX9sczZSgE3hL";navigate("/");setNav(0)}}>LogOut <LogoutIcon fontSize="verysmall" sx={{ml:"5%",mb:"4%"}}/> </Button>}
          </Stack>
        </Stack>
      </Stack>
    </AppBar>
   
  );
};

export default Navbar;
