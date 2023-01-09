import ExerciseDetail from "./Pages/ExerciseDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Explore from "./Pages/Explore";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import { useState } from "react";
import { createContext } from "react";
import icon from "./assets/icons/gym.png";
import Signup from "./Pages/Signup";
import Login from "./components/Login";
import Home from "./Pages/Home";
import Form from "./components/Form";
import Yoga from "./Pages/Yoga";
import Gym from "./Pages/Gym";
import HomeWorkout from "./Pages/HomeWorkout";
import Training from "./Pages/Gym/Training";
import Dashboard from "./Pages/Gym/Dashboard";
import Discover from "./Pages/Gym/Discover";
import WorkoutRoutine from "./components/WorkoutRoutine";
import GymExercise from "./Pages/Gym/GymExercise";
export const Update = createContext();
function App() {
  const [Color, setColor] = useState("#FF2625");
  const [textColor, seTextColor] = useState("black");
  const [bColor, setbColor] = useState("white");
  const [Icon, setIcon] = useState(icon);
  const [rightArrow, setrightArrow] = useState();
  const [leftArrow, setleftArrow] = useState();
  const [nav, setNav] = useState("./signup");
  const [verify, setVerify] = useState("Sign");
  const [displayAppBar, setDisplayAppBar] = useState("ok");
const[pathIndex,setPathIndex]=useState(0)
  const getColor = (item1, item2, item3, item4, item5, item6) => {
    setColor(item1);
    seTextColor(item2);
    setbColor(item3);
    setIcon(item4);
    setrightArrow(item5);
    setleftArrow(item6);
  };
  
  return (
    <Update.Provider
      value={{
        verify: verify,
        setVerify: setVerify,
        setNav: setNav,
        nav: nav,
        Color: Color,
        textColor: textColor,
        bColor: bColor,
        getColor: getColor,
        Icon: Icon,
        rightArrow: rightArrow,
        leftArrow: leftArrow,
        displayAppBar: displayAppBar,
        setDisplayAppBar: setDisplayAppBar,
        setColor:setColor
      }}
    >
      <BrowserRouter>
        <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
          <Navbar />
          {/* <Toggle/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/form" element={<Form />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/homeworkout" element={<HomeWorkout />} /> 
            <Route path="/gym" element={<Gym/>} >
              <Route path="gymexercise" element={<GymExercise pathIndex={pathIndex}/>}/>
            <Route path="traninggym" element={<Training />}/>
            <Route path="discovergym" element={<Discover />}/>
            <Route path="fullbody" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="lowerbody" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="absb" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="absi" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="absa" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="chestb" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="chesti" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="chesta" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="armb" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="armi" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="arma" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="legb" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="legi" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="lega" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="s&bb" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="s&bi" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="s&ba" element={<WorkoutRoutine pathIndex={pathIndex} setPathIndex={setPathIndex}/>} />  
            <Route path="dashboardgym" element={<Dashboard />}/>

          </Route>

            {/* <Route path="/checking" element={<Checking/>}/> */}
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </Update.Provider>
  );
}

export default App;
