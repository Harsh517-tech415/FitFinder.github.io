import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useContext } from "react";
import { Update } from "../App";
const Navbar = () => {
  const location=useLocation();
  const { Color, textColor,nav,verify} = useContext(Update);
  const [border, setBorder] = useState(`3px ${Color} solid`)
  return (
    <AppBar component="nav" poistion="sticky">
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "4px", lg: "2px" },
          justifyContent: "none",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "36px", height: "40px", margin: "0 20px" }}
          />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItem="flex-end">
          <Link
          to="/"
            style={{
              textDecoration: "none",
              color: textColor,
              borderBottom: location.pathname==="/" ? border : "",
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
              borderBottom: location.pathname==="/explore" ? border : "",
            }}
            onClick={() => {
              setBorder(`3px ${Color} solid`);
            }}
          >
            Explore
          </Link>
          <Link
            to="/workout"
            style={{
              textDecoration: "none",
              color: textColor,
              borderBottom:location.pathname==="/workout"?border:""
            }}
            fontSize={20}
          >
            Workout{" "}
          </Link>
          <Link
            to="/dashboard"
            onClick={() => {
              setBorder(`3px ${Color} solid`);
            }}
            style={{
              textDecoration: "none",
              color: textColor,
              borderBottom: location.pathname==="/dashboard" ?border:"",
            }}
          >
            Dashboard
          </Link>
          <Stack  sx={{ ml: { sm: "35px", lg: "700px" } }}>
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
