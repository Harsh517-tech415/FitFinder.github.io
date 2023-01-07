import React,{useEffect,useContext} from 'react'
import { Update } from '../App';
import { useLocation } from "react-router-dom";
import GymInfo from '../Pages/Gym/GymInfo';

const WorkoutRoutine = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  const exercises=[
    "fullbody",
    "lowerbody",
    "absb","absi","absa",
    "chestb","chesti","chesta",
    "armb","armi","arma",
    "legb","legi","lega",
    "s&bb","s&bi","s&ba"]
  useEffect(() => {
   exercises.map((index)=>{
     if(location.pathname === `/gym/${index}`)
      {
      setDisplayAppBar("none");
     }
   })}, [])
  return (<>
  <GymInfo/>
  </>    )
}

export default WorkoutRoutine