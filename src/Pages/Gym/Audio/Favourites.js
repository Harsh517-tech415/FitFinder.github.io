import { Typography } from '@mui/material'
import React,{useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {Update} from '../../../App'
const Favourites = () => {
  const {setDisplayAppBar}=useContext(Update)
    const location=useLocation()
    useEffect(()=>{if(location.pathname==="/gym/music/favourites"){setDisplayAppBar("none")}},[])

  return (
    <div>
      
    </div>
  )
}

export default Favourites
