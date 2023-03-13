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
import Training from "../../assets/images/Training.jpg";
import Discover from "../../assets/images/Discover.jpg";
import Custom from "../../assets/images/Custom.jpg";
import Dashboard from "../../assets/images/Dashboard.jpg";

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
      <Typography
        color="error"
        sx={{
          opacity: 0.9,
          position: "absolute",
          m: {xs:"35% 24%", sm: "39% 32%", lg: "35.3% 38%",xl:"20% 38%" },
          fontWeight: "bold",
          fontSize:{xs:".9rem",sm:"1.2rem",md:"1.3rem",lg:"1.5rem",xl:"2.5rem"}
        }}
      >
        Sweat now. Shine later.
      </Typography>
      <CardMedia
        sx={{
          height: { lg: "500px" },
        }}
        component="img"
        src={Tranning}
      />

      <Box
        sx={{
          width: { lg: "890px" },
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
              background: "linear-gradient(to Top Left,black,grey)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize:{xs:".9rem",sm:"1.2rem",md:"1.3rem",lg:"1.5rem",xl:"1.7rem"}
            }}
          >
            Tranning
          </Typography>
          <ArrowForward fontSize="small" />
        </Button>

        <Stack direction="row" >
          <Stack direction="column">
          <Typography
            paragraph={true}
            sx={{ textAlign: "left", fontSize:{xs:".6rem",sm:".9rem",md:"1.0rem",lg:"1.2rem",xl:"1.4rem"} }}
          >
            This page offers a range of features for individuals seeking to
            improve their health and fitness. With a fitness tracker and calorie
            tracker, users can monitor their progress and adjust their routines
            accordingly. Additionally, the ability to select a personalized plan
            provides an added level of customization to achieve specific goals.
          </Typography>
          <Card sx={{ width: { sm: "500px", lg: "480px" },mt:"1.1%"}}>
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
            />
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
          </Stack>
          <Card
            component={motion.div}
            initial={{ x: +100 }}
            animate={{ x: -10, delay: 2 }}
            sx={{width:{sm:"",lg:"380px"},ml:"2%"}}

          >
            <CardMedia sx={{height:"400px"}} component="img" src={Training} />
          </Card>
        </Stack>
    
      </Box>
      <Box container sx={{ height: {sm:"600px", lg: "680px" }, background: "#ECEEF4" }}>
        <Box
          sx={{
            width: { lg: "870px" },
            m: { sm: "10% 0px 0px 65px", lg: "5% 0px 0px 300px" },
          }}
        >
          <Button
            sx={{
              mt: "5%",
            }}
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
                fontSize:{xs:".9rem",sm:"1.2rem",md:"1.3rem",lg:"1.5rem",xl:"1.7rem"}
              }}
            >
              Discover
            </Typography>
            <ArrowForward fontSize="small" />
          </Button>

          <Stack direction="row">
            <Stack>
            <Typography
              sx={{ fontSize:{xs:".6rem",sm:".9rem",md:"1.0rem",lg:"1.2rem",xl:"1.4rem"}, textAlign: "left" }}
            >
              This page offers exercise plans for people of all levels, from
              beginner to advanced. Whether you are just starting out or looking
              to take your workouts to the next level, you can find the perfect
              plan to help you achieve your goals. With a variety of options to
              choose from, you can tailor your workout to your individual needs
              and preferences.
            </Typography>
            <Card sx={{ width: { sm: "500px", lg: "500px" },mt:"2%" }}>
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
            </Stack>
            <Card
              component={motion.div}
              initial={{ x: +100 }}
              animate={{ x: -10, delay: 2 }}
              sx={{ width: { sm: "", lg: "380px" }, ml: "4%" }}
            >
              <CardMedia sx={{height:"500px"}}component="img" src={Discover} />
            </Card>
          </Stack>
          
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
              fontSize:{xs:".9rem",sm:"1.2rem",md:"1.3rem",lg:"1.5rem",xl:"1.7rem"}
            }}
          >
            Custom
          </Typography>
          <ArrowForward fontSize="small" />
        </Button>

        <Stack direction="row">
          <Stack>
          <Typography
            sx={{ fontSize:{xs:".6rem",sm:".9rem",md:"1.0rem",lg:"1.2rem",xl:"1.4rem"}, textAlign: "left" }}
          >
            This page provides you with the ability to create customized
            exercises tailored to your fitness level and preferences. With a
            wide range of options and features, you can design a workout plan
            that is both challenging and enjoyable. Start building your
            personalized exercise routine today and achieve your fitness goals!
          </Typography>
          <Card sx={{ width: { sm: "500px", lg: "500px" }, mt: {sm:"4%"} }}>
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
          </Stack>
          <Card
            component={motion.div}
            initial={{ x: +100 }}
            animate={{ x: -10, delay: 2 }}
            sx={{ width: { sm: "", lg: "380px" },height:"344px", ml: "3%" }}
          >
            <CardMedia component="img" src={Custom} />
          </Card>
        </Stack>
       
      </Box>
      <Box sx={{ height: { lg: "440px" }, background: "#ECEEF4" }}>
        <Box
          sx={{
            m: { sm: "10% 0px 0px 65px", lg: "5% 0px 0px 300px" },
          }}
        >
          <Button
            sx={{ mt: "5%" }}
            onClick={() => {
              navigate("/gym/dashboardgym");
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                background: "linear-gradient(to Top Left,black,grey)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize:{xs:".9rem",sm:"1.2rem",md:"1.3rem",lg:"1.5rem",xl:"1.7rem"}
              }}
            >
              Dashboard
            </Typography>
            <ArrowForward fontSize="small" />
          </Button>

          <Stack direction="row">
            <Stack>
            <Typography
              sx={{ fontSize:{xs:".6rem",sm:".9rem",md:"1.0rem",lg:"1.2rem",xl:"1.4rem"}, textAlign: "left" }}
            >
              This page is designed to track and display your workout progress
              using a graph. The graph will provide you with a visual
              representation of your progress, allowing you to track your
              fitness journey more easily. You can use this information to
              adjust your workouts, set new goals, and continue to improve your
              overall fitness level.
            </Typography>
            <Card sx={{ width: { sm: "500px", lg: "500px" },mt:"6%" }}>
            <CardContent
              sx={{
                fontSize: "32px",
                color: "#3b3d50",
                fontWeight: "bold",
                ml: "15%",
                
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
            </Stack>
            <Card
              component={motion.div}
              initial={{ x: +100 }}
              animate={{ x: -10, delay: 2 }}
              sx={{ width: { sm: "", lg: "380px" }, ml: "3%" }}
            >
              <CardMedia component="img" sx={{height:"300px"}}src={Dashboard} />
            </Card>
          </Stack>
          
        </Box>
      </Box>
    </div>
  );
};

export default GymHome;
