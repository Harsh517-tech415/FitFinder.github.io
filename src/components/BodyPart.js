import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { Update } from "../App";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const { Color, Icon } = useContext(Update);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "white",
        borderBottomRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1700, behavior: "smooth" });
      
      }}
    >
      <img src={Icon} alt="Dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize={20}
        fontWeight="bold"
        color={Color}
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
