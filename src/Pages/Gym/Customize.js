import {
  Box,
  Button,
  CardMedia,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import AddExercise from "./AddExercise";
const Customize = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const navigate=useNavigate()
  const [value, setValue] = useState(0);
  const [searchValue, setSearchValue] = useState();
  const [option, setOption] = useState(1);
 const [disable,setDisable]=useState(true)
 const workoutname=useRef("");
 const [name,setName]=useState()
  useEffect(() => {
    if (location.pathname === "/gym/customize") {
      setDisplayAppBar("none");
    }}
  ,[])
  return (
    <div>
      <Stack direction="row"  sx={{mt:{sm:"10%",lg:"5%"}}}>
      <Button color="error" onClick={()=>{setDisable(false)}}sx={{ml:{sm:"9%",lg:"18%"}}}>Add Wokout <CreateIcon fontSize="small" sx={{mb:"5%"}}/></Button>
      <TextField color="error" inputRef={workoutname} 
      // onChange={(e)=>{workoutname.current=e.target.value}}
      placeholder="Workout Name" variant="standard" disabled={disable} sx={{ml:"20px"}}/>\
      <Button color="success" onClick={()=>{setDisable(true)}} disabled={disable} ><CheckIcon/></Button></Stack>
      {value === 0 ? (
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
          >No customized workout
          </Typography>
        </div>
      ) : (
        <Box></Box>
      )}
    </div>
  );
};

export default Customize;
