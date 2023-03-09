import { Stack, Button, Typography, Card, CardMedia } from "@mui/material";
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
          sx={{
            margin: {
              sm: "0px 43.300px 0px 43.286px",
              lg: "0px 240.857px 0px 240.857px ",
            },
            padding: "0px 20px 0px 20px",
          }}
        >
          <Button
            onClick={() => {
              navigate("/gym/homegym");
            }}
            sx={{
              width: "calc(100%/6)",
              margin: { sm: "10px 10px 0px 0px", lg: "15px 10px 0px 0px" },
              // textDecoration: "none",
            }}
          >
            <img src={gym} style={{ width: "28px", height: "28px" }} />
            <Typography
              sx={{
                color: "#FF073A",
                display: "inline",
                fontSize: { sm: "20px", lg: "25px" },
                marginLeft: "10px",
              }}
            >
              Gym
            </Typography>
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/traninggym");
            }}
            sx={{
              fontSize: { sm: "17px", lg: "20px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Traning
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/discovergym");
            }}
            sx={{
              fontSize: { sm: "17px", lg: "20px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Discover
          </Button>
          <Button
            sx={{
              fontSize: { sm: "17px", lg: "20px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
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
              fontSize: { sm: "17px", lg: "20px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/music");
            }}
            sx={{
              fontSize: { sm: "17px", lg: "20px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Music
          </Button>
          <Button
            onClick={() => {
              navigate("/gym/gymdiet");
            }}
            sx={{
              fontSize: { sm: "17px", lg: "20px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
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
