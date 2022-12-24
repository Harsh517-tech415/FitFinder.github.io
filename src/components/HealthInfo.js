import { Box, InputAdornment, TextField,Button } from "@mui/material";
import React,{useContext} from "react";
import ScaleIcon from "@mui/icons-material/Scale";
import {GiBodyHeight} from 'react-icons/gi'
import BoyIcon from '@mui/icons-material/Boy';
import { DatabaseUpdate } from "./Form";
const HealthInfo = () => {
const {weight,setWeight,height,setHeight,age,setAge,bmi,setBmi}=useContext(DatabaseUpdate)
  return (
    <Box
      sx={{
        width: "500px",
        height: "350px",
        marginLeft: { sm: "150px" },
        marginBottom: "10px",
        marginRight: { sm: "160px", lg: "440px" },
        borderColor: "red",
        boxShadow: "0 0 5px 5px green",
        borderRadius: "10px",
        marginTop: "70px",
      }}
    >
        <label
          style={{
            marginLeft: "70px",
            fontSize: "40px",
            fontFamily: "Google Sans,Noto Sans Myanmar UI,arial,sans-serif",
            color: "#4caf50",
          }}
        >
          Health{" "}
        </label>
        <label
          style={{
            fontSize: "40px",
            fontFamily: "Google Sans,Noto Sans Myanmar UI,arial,sans-serif",
            color: "lightgrey",
          }}
        >
          Information{" "}
        </label>

        <TextField 
        type="number"
        label="Weight"
        placeholder="Kg"
         required
         size="small"
         color="success"
         value={weight}
         onChange={(e)=>{setWeight(e.target.value)}}
         sx={{
            ml:"70px",
            width:"150px",
            mt:"30px"
            }}
         InputProps={{
            endAdornment:<InputAdornment position="end"><ScaleIcon/></InputAdornment>
         }} />
        <TextField
          type="number"
          label="Height"
          size="small"
          color="success"
          placeholder="0FT 0.0 IN"
          value={height}
          onChange={(e)=>{setHeight(e.target.value)}}
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            width:"150px"
          }}
          required
          InputProps={{
            endAdornment:<InputAdornment position="end"><GiBodyHeight/></InputAdornment>
          }}
        />
        <TextField
          required
          type="number"
          value={age}
          onClick={(e)=>{setAge(e.target.value)}}
          size="small"
          label="Age"
          color="success"
          style={{
            width: "150px",
            marginLeft: "70px",
            marginTop: "24px",
          }}
          InputProps={{
            endAdornment:<InputAdornment><BoyIcon/></InputAdornment>
          }}
        />
        <TextField
          type="text"
          label="BMI"
          value={bmi}
          onChange={(e)=>{setBmi(e.target.value)}}
        disabled
          style={{
            width: "250px",
            marginLeft: "70px",
            marginRight:"150px",
            marginTop: "24px",
          }}
          size="small"
          InputProps={{
            endAdornment:<InputAdornment>kg/m</InputAdornment>
          }}
        />
        <br />
        <Button
        size="small"
        color="success"
        variant="outlined"
        sx={{ml:"200px",mt:"24px"}}>
        Submit
        </Button>
    </Box>
  );
};

export default HealthInfo;
