import {Box,Button,Input,Stack,TextField,Typography,} from "@mui/material";
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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { motion } from "framer-motion";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import Cookies from "js-cookie";
const AddExercise = ({display,setDisplay}) => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const [render, setRender] = useState(0);
  const [stop, setStop] = useState(0);
  const [disable,setDisable]=useState(true)
  const [recentlyAddedList,setRcentlyAddedList] = useState([]);

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
  useEffect(()=>{if(recentlyAddedList.length>0){setDisable(false)}},[recentlyAddedList])
  return (
    <Box sx={{position:"absolute",ml:{lg:"18%"}}}>
      <TextField
   variant="standard"
        inputRef={workoutname}
        onChange={()=>{fetch();setDisplay("ok")}}
        placeholder="Search Exercise"
        sx={{
          width: { sm: "700px" },
          mt: { sm: "10%", lg: "5%" },
          ml: { sm: "10%", lg: "25%" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment:(
            <InputAdornment>
           <Button disabled={disable}> <CheckIcon onClick={
             async function addItem(){
              setRcentlyAddedList([])
              setDisplay("none");
              workoutname.current.value=""
            try{
              await setDoc(doc(db,Cookies.get("_hash"),`${location.pathname.split(":")[1]}`),{recentlyAddedList},{merge:true})
            }catch(err){console.log(err)}
           }}/></Button>
            </InputAdornment>
          )
        }}
      />

      <Box
        id="slider"
        className="exercisedata"
        sx={{
          borderRadius: "4px",
          minHeight: "100px",
          height:{sm:"203px",lg:"250px"},
          width: "700px",
          ml: { sm: "10%", lg: "25%" },
          overflowY: "scroll",
          borderTop:"0px",
          display:display,
        }}
      >
        <Stack>
          <Typography sx={{ fontWeight: "600", ml: "10px" }}>
            Recently Added
            <SettingsOutlinedIcon sx={{ml:"5px",mb:"4px",fontSize:"medium"}}/>
          </Typography>
          {
            <Stack direction="row" id="slider" sx={{display:"flex",flexWrap:"wrap ",width:"680px",height:"50px",overflowX:"scroll"}}>
              {recentlyAddedList.map((item,index) => (
                <Button variant="outlined"  sx={{color:"black",backgroundColor:"lightgreen",ml:"7px",mt:"5px"}}>{item.name}<DeleteOutlineOutlinedIcon /> </Button>
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
                    setRcentlyAddedList([...recentlyAddedList,item])
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
          <Box>
            <CreateIcon
              sx={{
                color: "grey",
                mt: { sm: "400px", lg: "390px" },
                ml: { sm: "53%", lg: "40%" },
              }}
            />
            <Typography
              sx={{ color: "grey", mt: "1%", ml: { sm: "45%", lg: "36.3%" } }}
            >
              No customized workout
            </Typography>
          </Box>
        ) : (
          <Box></Box>
        )} */}
    </Box>
  );
};

export default AddExercise;
