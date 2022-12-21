import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Update } from "../App";
const ExerciseVideo = ({ exerciseVideos, name }) => {
  const { Color, textColor, bColor } = useContext(Update);
  return (
    <Box sx={{ marginTop: { lg: "150px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px" color={textColor}>
        Watch{" "}
        <span style={{ color: Color, textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "10px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            rel="noreferrer"
          >
            <img
              width="300px"
              height="200px"
              sx={{ mb: { lg: "50px" } }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography width="300px" variant="h7" color={textColor}>
                {item.video.title}
              </Typography>
              <br />
              <Typography width="300px" variant="h7" color={textColor}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
