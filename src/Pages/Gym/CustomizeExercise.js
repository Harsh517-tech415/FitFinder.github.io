import { Box, Typography, Card, CardMedia, Stack } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import { db } from "../../components/firebase";
import AddExercise from "./AddExercise";
import CreateIcon from "@mui/icons-material/Create";
import { motion } from "framer-motion";
const CustomizeExercise = () => {
  const location = useLocation();
  const [display, setDisplay] = useState("none");
  const { setDisplayAppBar } = useContext(Update);
  const [option, setOption] = useState(0);
  const [data, setData] = useState([]);
  const [recentlyAddedList, setRcentlyAddedList] = useState([]);
  useEffect(() => {
    if (location.pathname) {
      setDisplayAppBar("none");
    }
    async function getData() {
      try {
        let d = await getDoc(
          doc(db, Cookies.get("_hash"), `${location.pathname.split(":")[1]}`)
        );
        setRcentlyAddedList(d.data().recentlyAddedList);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  useEffect(() => {
    setOption(1);
  }, [data]);
  function getColor(value) {
    const r = 255 - Math.floor(Math.random() * value);
    const g = 255 - Math.floor(Math.random() * value);
    const b = 255 - Math.floor(Math.random() * value);
    return `rgb(${r},${b},${g})`;
  }
  return (
    <Box>
      <AddExercise recentlyAddedList={recentlyAddedList} setRcentlyAddedList={setRcentlyAddedList} display={display} setDisplay={setDisplay} />
      <Box
        sx={{
          height: "300px",
          boxShadow: "0px 0px 201px 2px white",
          background: `linear-gradient(to right bottom,${getColor(
            70
          )},${getColor(150)})`,
        }}
        onClick={() => {
          setDisplay("none");
        }}
      ></Box>
      {option === 0 ? (
        <Box onClick={()=>{setDisplay("none")}}>
          <CreateIcon
            sx={{
              color: "grey",
              mt: { sm: "400px", lg: "390px" },
              ml: { sm: "53%", lg: "40%" },
            }}
          />
          <Typography sx={{ color: "grey", ml: { sm: "45%", lg: "36.3%" } }}>
            No customized workout
          </Typography>{" "}
        </Box>
      ) : (
        <Box
        onClick={()=>{setDisplay("none")}}
          id="slider"
          sx={{
            height: "700px",
            overflowY: "scroll",
            mb: "1%",
            ml: { sm: "7%", lg: "16%" },
            mr: { sm: "10%", lg: "10%" },
            width:{sm:"750px",lg:"1100px"}
          }}
        >
          {recentlyAddedList.map((item) => (
            <Card
            component={motion.div}
            initial={{x:-10,duration:"1sec"}}
            animate={{x:10}}
            whileHover={{scale:1.05}}
              sx={{
                boxShadow: "0px 0px 2px 1px grey",
                m: { sm: "10px 0% 0px 2%", lg: "10px 0% 0px 5%" },
                width: { sm: "700px", lg: "980px" },
              }}
            >
              <CardMedia
                component="img"
                src={item.gifUrl}
                sx={{ width: "150px" }}
              />
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CustomizeExercise;
