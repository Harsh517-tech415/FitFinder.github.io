import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import peakpx from '/home/monster/Documents/MyWealthApp/src/assets/images/peakpx.jpg'
const Traning = () => {

  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/traninggym") {
      setDisplayAppBar("none");
     }
  }, []);
  return (
    <div>
      <img src={peakpx} style={{width:"1760px",height:"860px"}}/>
    </div>
  )
}

export default Traning