import { Box, InputAdornment, TextField,Button, Typography } from "@mui/material";
import React,{useContext,useEffect,useState} from "react";
import ScaleIcon from "@mui/icons-material/Scale";
import {GiBodyHeight} from 'react-icons/gi'
import BoyIcon from '@mui/icons-material/Boy';
import HeightIcon from '@mui/icons-material/Height';
import { DatabaseUpdate } from "./Form";
const HealthInfo = () => {
const {weight,setWeight,heightFT,setHeightFT,heightIN,setHeightIN,age,setAge,bmi,setBmi,setStarted}=useContext(DatabaseUpdate)
const [displayBmi,setDisplayBmi]=useState("")
const [bmiColor,setBmiColor]=useState("red")
let w=weight*2.204623*703,h=Math.pow(heightFT*12 + +heightIN,2),b=w/h
setBmi(b.toFixed(2))  

useEffect(()=>{if(bmi<=16.0){setDisplayBmi("*Severely UnderWeight")}
  else if(bmi>16.0 && bmi<18.4){setDisplayBmi("*Underweight")}
  else if(bmi>=18.5 && bmi<=24.9){setDisplayBmi("*Normal")}
  else if(bmi>=25.0 && bmi<=29.9){setDisplayBmi("*Overweight")}
  else if(bmi>=30.0 && bmi<=34.9){setDisplayBmi("*Moderately Obese")}
  else if(bmi>=35.0 && bmi<=39.9){setDisplayBmi("*Severely Obese")}
  else if(bmi>=40.0){setDisplayBmi("Morbidly Obese")}},[bmi])  

  useEffect(()=>{
  if(displayBmi=="*Severely Underweight" || displayBmi== "*Underweight"){setBmiColor("#FFE189")}
  else if(displayBmi==="*Normal"){setBmiColor("green")}
  else if(displayBmi==="*Overweight"){setBmiColor("orange")}
  else if(displayBmi==="*Moderately Obese" || displayBmi==="*Severely Obese" || displayBmi=="*Morbidly Obese"){setBmiColor("red")}
},[displayBmi])

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
          required
          type="number"
          value={age}
          onChange={(e)=>{setAge(e.target.value)}}
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
          type="number"
          label="Height"
          size="small"
          color="success"
          placeholder="0 FT"
          value={heightFT}
          onChange={(e)=>{setHeightFT(e.target.value)}}
          style={{
            marginLeft: "70px",
            marginTop: "30px",
            width:"150px"
          }}
          required
          InputProps={{
            endAdornment:<InputAdornment position="end"><GiBodyHeight/></InputAdornment>
          }}
        />
        <TextField
          type="number"
          label="Height"
          size="small"
          color="success"
          placeholder="0.0 IN"
          value={heightIN}
          onChange={(e)=>{setHeightIN(e.target.value)
          }}
          style={{
            marginLeft: "70px",
            marginTop: "30px",
            width:"150px"
          }}
          required
          InputProps={{
            endAdornment:<InputAdornment position="end"><HeightIcon/></InputAdornment>
          }}
        />
          <Typography style={{color:bmiColor}} sx=
          {{ml:"70px",
          marginTop: "20px",
        }}>{displayBmi}</Typography>
        <TextField
          type="text"
          value={bmi}
          onChange={()=>{

        }}
        disabled
          style={{
            width: "370px",
            marginLeft: "70px",
            marginRight:"150px",
          }}
          size="small"
          InputProps={{
            endAdornment:<InputAdornment>kg/m</InputAdornment>
          }}
        />
          <br />
        <Button
        size="medium"
        color="success"
        variant="outlined"
        sx={{ml:"200px",mt:"10px"}}
        onClick={()=>{if(weight==="" || heightFT==="" || heightIN==="" ||age===""|| bmi===""){
          alert("Please provide the required info")
        }
        else{
          setStarted(false)
        }}}>
        Submit
        </Button>
    </Box>
  );
};

export default HealthInfo;
