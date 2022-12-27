import ExerciseDetail from './Pages/ExerciseDetail';
import {BrowserRouter,Route,Routes} from"react-router-dom";
import Navbar from './components/Navbar';
import {Box} from '@mui/material';
import Explore from './Pages/Explore';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Toggle from './components/Toggle';
import { useState } from 'react';
import { createContext } from 'react';
import icon from './assets/icons/gym.png'
import Dashboard from './Pages/Dashboard';
import Workout from './Pages/Workout'
import Signup from './Pages/Signup';
import Login from './components/Login';
import Home from './Pages/Home'
import Checking from './lib/Checking'
import Form from './components/Form';
export const Update=createContext();
function App() {
const [Color,setColor]=useState("#FF2625");
const [textColor,seTextColor]=useState("black");
const [bColor,setbColor]=useState("white");
const [Icon,setIcon]=useState(icon)
const [rightArrow,setrightArrow]=useState();
const [leftArrow,setleftArrow]=useState();
const [nav,setNav]=useState('./signup')
const [verify,setVerify]=useState('Sign')
const getColor=(item1,item2,item3,item4,item5,item6)=>
  {
    setColor(item1)
    seTextColor(item2)
    setbColor(item3)
    setIcon(item4)
    setrightArrow(item5)
    setleftArrow(item6)
  }
  return (
  <Update.Provider value={{verify:verify,setVerify:setVerify,setNav:setNav,nav:nav,Color:Color,textColor:textColor,bColor:bColor,getColor:getColor,Icon:Icon,rightArrow:rightArrow,leftArrow:leftArrow}}>
  <BrowserRouter>
   <Box width="400px" sx={{width:{x1:'1488px'}}} m="auto">
    <Navbar/>
   <Toggle/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/workout" element={<Workout/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/form" element={<Form/>}/>
      {/* <Route path="/checking" element={<Checking/>}/> */}
    </Routes>
    <Footer/>
   </Box>
   </BrowserRouter>
   </Update.Provider>
  );
}

export default App;
