import React from "react";
import { Stack } from "@mui/material";
import { Rings } from "react-loader-spinner";
const Loader = () => {
  return (
    <Stack
      marginLeft="450px"
      dirext
      ion="row"
      justifyContent="center"
      alignItem="center"
      width="100%"
    >
      <Rings color="gray" />
    </Stack>
  );
};

export default Loader;
