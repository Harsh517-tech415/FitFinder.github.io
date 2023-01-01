import { Box, Typography } from '@mui/material';
import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import bg1 from "../../assets/images/bg1.jpg";

const Discover = () => {
  const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/discovergym") {
      setDisplayAppBar("none");
     }
  }, []);
  return (
    <div >

    </div>
  )
}

export default Discover