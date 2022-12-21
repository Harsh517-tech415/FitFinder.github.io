import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrolbar from "./HorizontalScrolbar";
import Loader from "./Loader";
import { useContext } from "react";
import { Update } from "../App";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
const { Color, textColor, bColor }=useContext(Update);

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5} color={textColor}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrolbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        mb={10}
        sx={{ marginTop: { lg: "150px", xs: "20px" } }}
        color={textColor}
      >
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrolbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
