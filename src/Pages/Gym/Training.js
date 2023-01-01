import React,{useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import Carousel from '../../components/Carousel'

const Training = () => {
    const { setDisplayAppBar } = useContext(Update);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/gym/traninggym") {
      setDisplayAppBar("none");
     }
  }, []);
  return (
    <>
<Carousel/>
    </>
  )
}

export default Training