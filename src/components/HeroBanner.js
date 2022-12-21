import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Update } from "../App";
import { useContext } from "react";
import image1 from "../assets/images/BodyPart-1.jpg";
import image2 from "../assets/images/BodyPart-2.png";
import image3 from "../assets/images/BodyPart-3.png";
import image4 from "../assets/images/BodyPart-4.png";
import image5 from "../assets/images/BodyPart-5.png";
import image6 from "../assets/images/BodyPart-6.png";
import image7 from "../assets/images/BodyPart-7.png";
import image8 from "../assets/images/BodyPart-8.png";
import image9 from "../assets/images/BodyPart-9.png";
import image10 from "../assets/images/BodyPart-10.png";
import image11 from "../assets/images/BodyPart-11.png";
import image12 from "../assets/images/BodyPart-12.png";
import image13 from "../assets/images/BodyPart-13.png";
import image14 from "../assets/images/BodyPart-14.png";
import image15 from "../assets/images/BodyPart-15.png";
import image16 from "../assets/images/BodyPart-16.png";
import image17 from "../assets/images/BodyPart-17.png";
import image18 from "../assets/images/BodyPart-18.png";
import image19 from "../assets/images/BodyPart-19.png";
import image20 from "../assets/images/BodyPart-20.png";
const HeroBanner = () => {
  const list = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  ];
  let a = Math.floor(Math.random() * 21);
  const { Color, textColor } = useContext(Update);
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "50px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color={Color} fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        color={textColor}
        fontWeight={700}
        mb="23px"
        mt="23px"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile
        <br /> and Repeat
      </Typography>
      <Typography color={textColor} fontSize="22px" LineHeight="35px">
        Check out the most effective exercise
      </Typography>
      <Button
        variant="contained"
        mt={5}
        href="#exercises"
        sx={{ backgroundColor: Color, padding: "10px" }}
        onClick={() => {
          window.scrollTo({ top: 1000, behavior: "smooth" });
        }}
      >
        Explore
      </Button>
      <Typography
        fontWeight={600}
        color={Color}
        fontSize="200px"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img
        src={list[a]}
        alt="banner"
        className="hero-banner-img"
        poistion="relative"
      />
      <br />
      <br />
    </Box>
  );
};

export default HeroBanner;
