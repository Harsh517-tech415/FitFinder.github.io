import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CreateIcon from "@mui/icons-material/Create";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import InfiniteScroll from "react-infinite-scroll-component";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { motion } from "framer-motion";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import Cookies from "js-cookie";
const AddExercise = ({ recentlyAddedList,display, setDisplay,setRcentlyAddedList }) => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const [render, setRender] = useState(0);
  const [stop, setStop] = useState(0);
  const [disable, setDisable] = useState(true);
  const [temporary, setTemporary] = useState(0);
  const [check, setCheck] = useState(0);

  useEffect(() => {
    async function setData() {
      try {
        await updateDoc(
          doc(db, Cookies.get("_hash"), `${location.pathname.split(":")[1]}`),
          { recentlyAddedList },
          { merge: true }
        );
      } catch (err) {
        console.log(err);
      }
      setDisplay("none");
      setDisable(true);
      workoutname.current.value = "";
    }
    if(temporary===1){
      setData();}
    
  }, [temporary]);
  let a = useRef([]),
    data = useRef([]),
    workoutname = useRef();

  function fetch() {
    data.current = a.current.filter((item) => {
      return (
        item.target.toLowerCase().includes(workoutname.current.value) ||
        item.name.toLowerCase().includes(workoutname.current.value) ||
        item.bodyPart.toLowerCase().includes(workoutname.current.value) ||
        item.equipment.toLowerCase().includes(workoutname.current.value)
      );
    });
    setRender(render + 1);
  }
  useEffect(() => {
    if (location.pathname === "/gym/addexercise") {
      setDisplayAppBar("none");
    }
    async function getData() {
      a.current = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setStop(1);
    }
    if (stop === 0) {
      getData();
    }
  }, []);
  useEffect(() => {
    if (recentlyAddedList.length > 0) {
      setDisable(false);
    }
  }, [recentlyAddedList]);
  return (
    <Box
      id="slider"
      sx={{
        position: "absolute",
        // border:"1px solid black",
        overflowY: "scroll",
        mt: { sm: "2%", lg: "1%" },
        ml: { sm: "10%", lg: "28%" },
        borderRadius: "10px",
        boxShadow: "0px 0px 5px 1px grey",
      }}
    >
      <TextField
        variant="standard"
        autoComplete="on"
        inputRef={workoutname}
        onChange={() => {
          fetch();
          setDisplay("ok");
        }}
        placeholder="Search Exercise"
        sx={{
          width: { sm: "700px" },
          ml: { sm: "1%", lg: "2%" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment>
              <Button disabled={disable}>
                {" "}
                <CheckIcon
                  onClick={() => {
                    
                        setTemporary(1);
                  }}
                />
              </Button>
            </InputAdornment>
          ),
        }}
      />

      <Box
        id="slider"
        className="exercisedata"
        sx={{
          borderRadius: "4px",
          minHeight: "100px",
          height: { sm: "233px", lg: "228px" },
          width: "700px",
          ml: { sm: "1%", lg: "1%" },
          display: display,
        }}
      >
        <Stack>
          
          <Typography sx={{ fontWeight: "600", ml: "10px" }}>
            Exercise Added
            <SettingsOutlinedIcon
              sx={{ ml: "5px", mb: "4px", fontSize: "medium" }}
            />
          </Typography>
          {
            <Stack
              direction="row"
              id="slider"
              sx={{
                display: "flex",
                flexWrap: "wrap ",
                width: "680px",
                minHeight:"2px",
                maxHeight:"45px",
                overflowY: "scroll",
                borderBottom:"1px solid black"
              }}
            >
              {recentlyAddedList.map((item, index) => (
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    backgroundColor: "lightgreen",
                    ml: "7px",
                    mt: "5px",
                    mb:"1px",
                    boxShadow:"0px 0px 5px 2px grey"
                  }}
                >
                  {item.name}
                  <DeleteOutlineOutlinedIcon />{" "}
                </Button>
              ))}
            </Stack>
          }
          <InfiniteScroll
            dataLength={data.current.length}
            loader={<h4>Loading...</h4>}
          >
            {data.current.map((item) => {
              return (
                <Button
                  component={motion.button}
                  id={item.name}
                  whileHover={{ scale: 1.1 }}
                  variant="outlined"
                  sx={{
                    m: "1% 1% 1% 1%",
                    color: "black",
                    dispaly: "block",
                    fontWeight: 600,
                  }}
                  onClick={() => {
                    document.getElementById(
                      `${item.name}`
                    ).style.backgroundColor = "lightgreen";
                    item.workout = 0;
                    item.kcal = 0;
                    item.reps = 0;
                    setRcentlyAddedList([...recentlyAddedList, item]);
                    console.log(recentlyAddedList)
                  }}
                >
                  {item.name}
                  <AddIcon sx={{ width: "15px", height: "15px", ml: "6px" }} />
                </Button>
              );
            })}
          </InfiniteScroll>
        </Stack>
      </Box>

      {/* {value === 0 ? (
          
          </Box>
        ) : (
          <Box></Box>
        )} */}
    </Box>
  );
};

export default AddExercise;
