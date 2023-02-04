import { Box } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import Cookies from 'js-cookie'
import React, { useContext,useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Update } from '../../App'
import { db } from '../../components/firebase'
import AddExercise from './AddExercise'
const CustomizeExercise = () => {
    const location=useLocation()
    const {setDisplayAppBar}=useContext(Update)
    const [option,setOption]=useState(0)
  useEffect(()=>{if(location.pathname){setDisplayAppBar("none")}

},[])
  function getColor(value){
    const r=255-Math.floor(Math.random()*value);
    const g=255-Math.floor(Math.random()*value);
    const b=255-Math.floor(Math.random()*value);
return `rgb(${r},${b},${g})`
  }  
  return (
    <div>
      <AddExercise/>
      <Box sx={{height:"350px",boxShadow:"0px 0px 11px 2px grey",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",background:`linear-gradient(to right bottom,${getColor(70)},${getColor(150)})`}}>s</Box>
   {option===0?("asa"):("sss")}
    </div>
  )
}

export default CustomizeExercise
