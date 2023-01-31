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
  const AddExercise = () => {
    const { setDisplayAppBar } = useContext(Update);
    const location = useLocation();
    const [value, setValue] = useState(0);
    const [searchValue, setSearchValue] = useState();
    const [option, setOption] = useState(1);
    const [stop, setStop] = useState(0);
    const [left,setLeft]=useState("none");
    const [right,setRight]=useState("ok")
    let a = useRef([0, 0]),
      data = useRef([0, 0]);
    function handleSearch(e) {
      setSearchValue(e.target.value.toLowerCase());
    }
    useEffect(() => {
      // setOption(0);
         if(option===0){
      data.current = a.current.filter((item) => {
        return (
          item.target.toLowerCase().includes(searchValue) ||
          item.name.toLowerCase().includes(searchValue) ||
          item.bodyPart.toLowerCase().includes(searchValue) ||
          item.equipment.toLowerCase().includes(searchValue)
        );
      });}
      setOption(0)
      console.log(data.current)
    }, [searchValue]);
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
          value={searchValue}
          onChange={(e) => {
            handleSearch(e);
          }}
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
        {option === 0 ? (
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
                  <Box sx={{ borderBottomColor: "1px solid black" }}>
                    <Button>
                    <Stack direction="row" sx={{backgroundColor:"white"}}>
                    <CardMedia
                      sx={{ width: "80px", height: "80px", display: "inline" }}
                      component="img"
                      src={item.gifUrl}
                    />
                    <Box sx={{width:"500px"}}>
                      <Button sx={{color:"black",fontWeight:600}}>
                      {item.name}
                    </Button></Box>
                  </Stack>
                  </Button>
                  </Box>
                );
              })}
            </InfiniteScroll>
          </Box>
        ) : (
          <span></span>
        )}
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
            >
              No customized workout
            </Typography>
          </div>
        ) : (
          <Box></Box>
        )}
      </div>
    );
  };
  
  export default AddExercise;
  