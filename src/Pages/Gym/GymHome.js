import { ArrowForward, Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Update } from "../../App";
import Tranning from "../../assets/images/tranning.webp";
const GymHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setDisplayAppBar } = useContext(Update);
  useEffect(() => {
    if (location.pathname === "/gym/homegym") {
      setDisplayAppBar("none");
    }
  }, []);
  return (
    <div>
        <Typography color="error" sx={{opacity:.9,position:"absolute",m:{sm:"39% 32%",lg:"29.3% 38%"},fontSize:{sm:"24px",lg:"34px"},fontWeight:"bold"}}>Sweat now. Shine later.</Typography>
      <CardMedia
        sx={{
          height: { lg: "500px" },
        }}
        component="img"
        src={Tranning}
      />
      <Box
        sx={{
          width: { sm: "641px", lg: "1014px" },
          m: { sm: "10% 0px 0px 65px", lg: "5% 0px 0px 300px" },
        }}
      >
        <Button
          onClick={() => {
            navigate("/gym/traninggym");
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              background: "linear-gradient(to Top Left,black,grey)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tranning
          </Typography>
          <ArrowForward fontSize="small" />
        </Button>

        <Stack direction="row" sx={{}}>
          <Typography paragraph={true}sx={{ textAlign:"left",width: { sm: "641px", lg: "500px" } }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            officiis deserunt porro quas magni? Maxime perspiciatis assumenda
            tempore dolore sapiente, quo ipsum provident, laudantium,
            praesentium odio ullam quam similique dolorum.
          </Typography>
          <Card
            component={motion.div}
            initial={{ x: +100 }}
            animate={{ x: -10, delay: 2 }}
            sx={{ width: { sm: "", lg: "300px" },ml:"2%"}}
          >
            <CardMedia component="img" sx={{width:"300px"}}src={Tranning} />
          </Card>
        </Stack>
        <Card sx={{ width: { sm: "500px", lg: "500px" } }}>
          <CardContent
            sx={{
              fontSize: "32px",
              color: "#3b3d50",
              fontWeight: "bold",
              ml: "10%",
            }}
          >
            Features
          </CardContent>
          <CardContent sx={{ fontSize: "16px" }}>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />{" "}
            Calorie Tracker
          </CardContent>
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Fitness tracking
          </CardContent>
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Selected plan
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
            background:"white"
        }}
      >
        <Box

          sx={{m: { sm: "10% 0px 0px 65px", lg: "5% 0px 0px 300px" }}}
          >

        <Button
          onClick={() => {
            navigate("/gym/discovergym");
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              background: "linear-gradient(to Top Left,black,grey)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover
          </Typography>
          <ArrowForward fontSize="small" />
        </Button>

        <Stack direction="row">
          <Typography sx={{ width: { sm: "641px", lg: "500px" },textAlign:"left" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            officiis deserunt porro quas magni? Maxime perspiciatis assumenda
            tempore dolore sapiente, quo ipsum provident, laudantium,
            praesentium odio ullam quam similique dolorum.
          </Typography>
          <Card
            component={motion.div}
            initial={{ x: +100 }}
            animate={{ x: -10, delay: 2 }}
            sx={{ width: { sm: "", lg: "300px"},ml:"2%" }}
          >
            <CardMedia component="img" src={Tranning} />
          </Card>
          
        </Stack>
        <Card sx={{ width: { sm: "500px", lg: "500px" } }}>
          <CardContent
            sx={{
              fontSize: "32px",
              color: "#3b3d50",
              fontWeight: "bold",
              ml: "10%",
            }}
          >
            Features
          </CardContent>
          <CardContent sx={{ fontSize: "16px" }}>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />{" "}
            Full Body Exercise
          </CardContent>
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Lower Body Exercise
          </CardContent>
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Beginner Exercises
          </CardContent>
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Intermediate Exercises
          </CardContent>{" "}
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Advance Exercises
          </CardContent>
        </Card>
      </Box>
      </Box>

      <Box
        sx={{
          width: { sm: "641px", lg: "1014px" },
          m: { sm: "10% 0px 0px 65px", lg: "5% 0px 0px 300px" },
        }}
      >
        <Button
          onClick={() => {
            navigate("/gym/customize");
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              background: "linear-gradient(to Top Left,black,grey)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Custom
          </Typography>
          <ArrowForward fontSize="small" />
        </Button>

        <Stack direction="row">
          <Typography sx={{ width: { sm: "641px", lg: "500px" },textAlign:"left" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            officiis deserunt porro quas magni? Maxime perspiciatis assumenda
            tempore dolore sapiente, quo ipsum provident, laudantium,
            praesentium odio ullam quam similique dolorum.
          </Typography>
          <Card
            component={motion.div}
            initial={{ x: +100 }}
            animate={{ x: -10, delay: 2 }}
            sx={{ width: { sm: "", lg: "300px" },ml:"2%" }}
          >
            <CardMedia component="img" src={Tranning} />
          </Card>
        </Stack>
        <Card sx={{ width: { sm: "500px", lg: "500px" } }}>
          <CardContent
            sx={{
              fontSize: "32px",
              color: "#3b3d50",
              fontWeight: "bold",
              ml: "10%",
            }}
          >
            Features
          </CardContent>
          <CardContent sx={{ fontSize: "16px" }}>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />{" "}
            Add Personalized workout.
          </CardContent>
          <CardContent>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />
            Remove Plan
          </CardContent>
        </Card>
      </Box>
      <Box
      sx={{backgroundColor:"white"}}>

      <Box
        sx={{
          m: { sm: "10% 0px 0px 65px", lg: "5% 0px 0px 300px" },
        }}
      >
        <Button
          onClick={() => {
            navigate("/gym/dashboardgym");
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              background: "linear-gradient(to Top Left,black,grey)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dashboard
          </Typography>
          <ArrowForward fontSize="small" />
        </Button>

        <Stack direction="row">
          <Typography sx={{ width: { sm: "641px", lg: "500px" },textAlign:"left" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            officiis deserunt porro quas magni? Maxime perspiciatis assumenda
            tempore dolore sapiente, quo ipsum provident, laudantium,
            praesentium odio ullam quam similique dolorum.
          </Typography>
          <Card
            component={motion.div}
            initial={{ x: +100 }}
            animate={{ x: -10, delay: 2 }}
            sx={{ width: { sm: "", lg: "300px" },ml:"2%" }}
          >
            <CardMedia component="img" src={Tranning} />
          </Card>
        </Stack>
        <Card sx={{ width: { sm: "500px", lg: "500px" } }}>
          <CardContent
            sx={{
              fontSize: "32px",
              color: "#3b3d50",
              fontWeight: "bold",
              ml: "10%",
            }}
          >
            Features
          </CardContent>
          <CardContent sx={{ fontSize: "16px" }}>
            <Check
              fontSize="small"
              color="success"
              sx={{ ml: "5%", mr: "5px" }}
            />{" "}
            Track progress.
          </CardContent>

        </Card>
      </Box>
      </Box>

    </div>
  );
};

export default GymHome;
