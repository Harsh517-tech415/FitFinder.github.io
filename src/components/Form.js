import React, { createContext, useState } from "react";
import { Button } from "@mui/material";
import BasicInfo from "./BasicInfo";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HealthInfo from "./HealthInfo";
import { Link } from "react-router-dom";
export const DatabaseUpdate = createContext();
const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailname, setEmailname] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState(0);
  const [heightFT, setHeightFT] = useState(0);
  const [heightIN, setHeightIN] = useState(0);
  const [age, setAge] = useState();
  const [bmi, setBmi] = useState();
  const [displayNext, setDisplayNext] = useState("ok");
  const [back, setBack] = useState(true);
  const [next, setNext] = useState(true);
  const [displayStarted,setDisplayStarted]=useState("none")
  const [started,setStarted]=useState(true)
  const [displayBasic,setDisplayBasic]=useState("ok")
  const [displayHealthInfo,setDisplayHealthInfo]=useState("none")
  
  return (
    <DatabaseUpdate.Provider
      value={{
        firstname: firstname,
        setFirstname: setFirstname,
        lastname: lastname,
        setLastname: setLastname,
        emailname: emailname,
        setEmailname: setEmailname,
        dob: dob,
        setDob: setDob,
        weight: weight,
        setWeight: setWeight,
        heightFT: heightFT,
        heightIN: heightIN,
        setHeightFT: setHeightFT,
        setHeightIN: setHeightIN,
        age: age,
        setAge: setAge,
        bmi: bmi,
        setBmi: setBmi,
        setNext: setNext,
        setStarted:setStarted,
        displayBasic:displayBasic,
        displayHealthInfo:displayHealthInfo
      }}
    >
        
          <BasicInfo />
          <HealthInfo />

      <Button
        onClick={() => {
          setBack(true)
          setDisplayNext("ok")
          setDisplayStarted("none")
          setDisplayBasic("ok")
          setDisplayHealthInfo("none")
        }}
        size="small"
        variant="outlined"
        color="error"
        disabled={back}
        sx={{ ml: { sm: "240px", lg: "730px" },mt:"10px" }}
     >
        {<ArrowLeftIcon />}Back
      </Button>
      <Button
        type="button"
        disabled={next}
        onClick={() => {
          setBack(false);
          setDisplayNext("none");
          setDisplayStarted("ok")
          setStarted(true)
          setDisplayBasic("none")
          setDisplayHealthInfo("ok")
        }}
        size="small"
        variant="outlined"
        color="error"
        sx={{ 
          ml: { sm: "210px", lg: "200px" },
          display: displayNext,
          mt:"10px" 
        
        }}
      >
        Next
        <ArrowRightIcon />
      </Button>
     <Button
      variant="contained"
      color="primary"
      disabled={started}
      sx={{
        ml: { sm: "150px", lg: "150px" },
        mt:"10px",
        display:displayStarted,
      }}
      >
        <Link to="/" 
        style={{textDecoration:"none",color:"white"}}
        > Get Started  
      </Link>
      </Button>
    </DatabaseUpdate.Provider>
  );
};

export default Form;
