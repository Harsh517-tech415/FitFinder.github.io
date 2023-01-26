import { Typography } from '@mui/material'
import React,{useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {Update} from '../../../App'

const Trending = () => {
  const {setDisplayAppBar}=useContext(Update)
    const location=useLocation()
    useEffect(()=>{if(location.pathname==="/gym/music/trending"){setDisplayAppBar("none")}},[])

  return (
    <div>
      
    </div>
  )
}

export default Trending
