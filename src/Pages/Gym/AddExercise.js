import {
    Box,
    Button,
    CardMedia,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
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
  import { SubdirectoryArrowLeft } from "@mui/icons-material";
import { motion } from "framer-motion";
  const AddExercise = () => {
    const { setDisplayAppBar } = useContext(Update);
    const location = useLocation();
    const [render,setRender]=useState(0)
    const [stop, setStop] = useState(0);
    const [color,setColor]=useState(false)
    let a = useRef([]),
      data = useRef([]),workoutname=useRef();
  
  function fetch(){
      data.current = a.current.filter((item) => {
        return (
          item.target.toLowerCase().includes(workoutname.current.value) ||
          item.name.toLowerCase().includes(workoutname.current.value) ||
          item.bodyPart.toLowerCase().includes(workoutname.current.value) ||
          item.equipment.toLowerCase().includes(workoutname.current.value)
        );
      })
      setRender(render+1)
      console.log(data.current)
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
        console.log(a.current);
        setStop(1);
      }
      if (stop === 0) {
        getData();
      }
    }, []);
    return (
      <div>
        
        <TextField
          inputRef={workoutname}
          onChange={fetch}
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
          }}
        />
        
          <Box
            id="slider"
            sx={{
              borderRadius: "4px",
              height: "250px",
              width: "700px",
              ml: { sm: "10%", lg: "25%" },
              overflowY: "scroll",
              border: "1px solid grey",
            }}
          >
            <InfiniteScroll
              dataLength={data.current.length}
              loader={<h4>Loading...</h4>}
            >
              {data.current.map((item) => {
                return (

                      <Button  component={motion.button} id={item.name} onClick={()=>{setColor(true)}} animate={color?{scale:1,document.getElementById()backgroundColor:"lightgreen"}:{}} whileHover={{scale:1.1}}variant="outlined"sx={{m:"1% 1% 1% 1%",color:"black",dispaly:"block",fontWeight:600}}>
                      {item.name}
                      <AddIcon  sx={{width:"15px",height:"15px",ml:"6px"}}/>
                    </Button>
                );
              })}
            </InfiniteScroll>
          </Box>
        
        {/* {value === 0 ? (
          <div>
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
          </div>
        ) : (
          <Box></Box>
        )} */}
      </div>
    );
  };
  
  export default AddExercise;
  