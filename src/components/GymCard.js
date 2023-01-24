import { Box, Stack, Link, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FitFinder from "./FitFinderInfo";
const GymCard = ({ Carddetail }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // async function call() {
    //   try {
    //     const a = await FitFinder.getDocsData();
    //     const a1 = a.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    //     console.log(JSON.stringify(a1));
    //   } catch (err) {
    //     console.log("Warning");
    //   }
    // }
    // call();
  }, []);
  const [workout, setWorkout] = useState(0);
  return (
    <Card
      sx={{
        minWidth: "275px",
        maxWidth: "275px",
        ml: "30px",
        boxShadow: "0px 4px 8px 1px grey",
      }}
    >
      <CardMedia
        component="img"
        alt="Image"
        Height="200px"
        width="275px"
        image={Carddetail.image}
      />
      <CardContent sx={{ p: "0px 0px" }}>
        <Stack direction="row" sx={{ width: "275px", height: "54px" }}>
          <span style={{ margin: "0px 15px 0px 25px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "27px",
                color: "#222222",
                fontWeight: "800",
              }}
            >
              {workout}
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "grey" }}>
              {Carddetail.label1}
            </Typography>
          </span>
          <span style={{ margin: "0px 0px 0px 25px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "27px",
                color: "#222222",
                fontWeight: "800",
              }}
            >
              0
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "grey" }}>
              {Carddetail.label2}
            </Typography>
          </span>
        </Stack>

        <Button
          className="gymCardButton"
          variant="contained"
          sx={{
            margin: "-140px 0px 0px 200px",
            width: "70px",
            height: "70px",
            borderRadius: "35px",
            border: "7px solid #cfd8dc",
            backgroundColor: "#9e9e9e",
          }}
          onClick={() => {
            navigate(`${[Carddetail.link]}`);
          }}
        >
          <PlayArrowIcon
            sx={{ color: "black", size: "large" }}
            className="playButton"
          />
        </Button>
        <Typography
          sx={{
            color: "red",
            border: "none",
            textAlign: "center",
            ml: [Carddetail.ml],
            fontSize: "18px",
            fontWeight: "1000",
          }}
        >
          {Carddetail.caption}
          <ElectricBoltIcon
            style={{ color: "red", display: [Carddetail.beginner] }}
          />
          <ElectricBoltIcon
            style={{ color: "red", display: [Carddetail.intermediate] }}
          />
          <ElectricBoltIcon
            style={{ color: "red", display: [Carddetail.advance] }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GymCard;
