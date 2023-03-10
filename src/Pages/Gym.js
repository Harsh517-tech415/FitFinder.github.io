import { Stack, Button, Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Update } from "../App";
import gym from "../assets/icons/gym.png";
const Gym = () => {
  const navigate = useNavigate();
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym") {
      setDisplayAppBar("none");
    }
    if(location.pathname!=='/gym/gymexercise')
    {
      document.cookie="StarTime=0;"
    }
    
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#16181D", height: "50px" }}></div>
      <AppBar
        sx={{
          height: { sm: "50px", lg: "60px" },
          backgroundColor: "#20232a",
        }}
        position="sticky"
      >
        <Stack
          direction="row"
          // columnSpacing={{xs:4,sm:2,md:2,lg:2,xl:2}}
          
        >
          <Button
            onClick={() => {
              navigate("/gym/homegym");
            }}
          >
            <img src={gym} 
            style={{ width: "20px", height: "20px" }}
             />
            
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/traninggym");
            }}
            sx={{
              color: "#FF073A",
              fontSize: {xs:"9px", sm: "17px", lg: "20px" },
            }}
          >
            Traning
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/discovergym");
            }}
            sx={{
              color: "#FF073A",
              fontSize: {xs:"9px", sm: "17px", lg: "20px" },
            }}
          >
            Discover
          </Button>
          <Button
            sx={{
              color: "#FF073A",
              fontSize: {xs:"9px", sm: "17px", lg: "20px" },
            }}
            onClick={() => {
              navigate("/gym/customize");
            }}
          >
            Customize
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/dashboardgym");
            }}
            sx={{
              color: "#FF073A",
              fontSize: {xs:"9px", sm: "17px", lg: "20px" },
            }}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/music");
            }}
            sx={{
              color: "#FF073A",
              fontSize: {xs:"9px", sm: "17px", lg: "20px" },
            }}
          >
            Music
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/gymdiet");
            }}
            sx={{
              color: "#FF073A",
              fontSize: {xs:"9px", sm: "17px", lg: "20px" },
            }}
          >
            Diet
          </Button>
        </Stack>
      </AppBar>
      <Outlet />
      
        
    </>
  );
};

export default Gym;
