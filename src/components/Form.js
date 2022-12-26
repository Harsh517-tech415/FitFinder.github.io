import React, { createContext, useState } from "react";
import { Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import BasicInfo from "./BasicInfo";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HealthInfo from "./HealthInfo";
export const DatabaseUpdate = createContext();
const Form = () => {
  const [borderColor, setBorderColor] = useState("red");
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
  
  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1600;
  };
  const sliderLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1600;
  };
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
        setStarted:setStarted
      }}
    >
      <Stack direction="column">                                                                                        
        <button
          style={{
            marginTop: "80px",
            marginLeft: "120px",
            width: "10px",
            height: "10px",
            borderRadius: "1000px",
            borderWidth: "1px",
            borderBlockColor: borderColor,
            boxShadow: "0px 0px 6px 5px red",
          }}
        ></button>
        <hr style={{
          margin:"auto 20px",
          border: "1.5px solid rgb(150,150,150)"
        }}/>
        <div
          id="slider"
          style={{
            display: "flex",
            overflowX: "scroll",
            overflow: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <BasicInfo />
          <Box ></Box>
          <HealthInfo />
        </div>
      </Stack>

      <Button
        onClick={() => {
          sliderLeft();
          setBack(true)
          setDisplayNext("ok")
          setDisplayStarted("none")
        }}
        size="small"
        variant="outlined"
        color="error"
        disabled={back}
        sx={{ ml: { sm: "190px", lg: "640px" } }}
     >
        {<ArrowLeftIcon />}Back
      </Button>
      <Button
        type="button"
        disabled={next}
        onClick={() => {
          sliderRight();
          setBack(false);
          setDisplayNext("none");
          setDisplayStarted("ok")
          setStarted(true)
        }}
        size="small"
        variant="outlined"
        color="error"
        sx={{ 
          ml: { sm: "205px", lg: "270px" },
          display: displayNext 
        
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
        ml: { sm: "205px", lg: "270px" },
        display:displayStarted
      }}
      >
        Get Started  
      </Button>
    </DatabaseUpdate.Provider>
  );
};

export default Form;
