import { Stack, Link, Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useLocation,Outlet } from "react-router-dom";
import { Update } from "../App";
import gym from "../assets/icons/gym.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Gym = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym") {
      setDisplayAppBar("none");
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
          <Link
          href="/gym"
            sx={{
              width: "calc(100% / 6)",
              margin: { sm: "10px 10px 0px 0px", lg: "15px 10px 0px 0px" },
              textDecoration: "none",
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
          </Link>
          <Link
          href="/gym/traninggym"
            sx={{
              textDecoration: "none",
              fontSize: { sm: "20px", lg: "25px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Traning
          </Link>
          <Link
            href="/gym/discovergym"
            sx={{
              textDecoration: "none",
              fontSize: { sm: "20px", lg: "25px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Discover
          </Link>
          <Link
            href="/dashboardgym"
            sx={{
              textDecoration: "none",
              fontSize: { sm: "20px", lg: "25px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Dashboard
          </Link>
          <Link
            href="/music"
            sx={{
              textDecoration: "none",
              fontSize: { sm: "20px", lg: "25px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Music
          </Link>
          <Link
            href="/dietgym"
            sx={{
              textDecoration: "none",
              fontSize: { sm: "20px", lg: "25px" },
              height: { sm: "50px", lg: "60px" },
              padding: { sm: "10px 10px", lg: "20px 20px", color: "#FF073A" },
            }}
          >
            Diet
          </Link>
        </Stack>
      </AppBar>
      <Outlet/>
    </>
  );
};

export default Gym;
