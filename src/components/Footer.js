import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Update } from "../App";
const Footer = () => {
  const { Color, textColor, bColor } = useContext(Update);
  return (
    <div>
      <Typography
        textAlign="center"
        color={bColor}
        bgcolor={Color}
        paddingRight={3}
        mt={48.5}
        paddingBottom={1}
        variant="h5"
        pt={1}
      >
        Made with ❤️ by Harsh
      </Typography>
    </div>
  );
};

export default Footer;
