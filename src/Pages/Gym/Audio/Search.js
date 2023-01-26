import { TextField, Typography } from '@mui/material'
import React,{useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {Update} from '../../../App'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Search = () => {
    const {setDisplayAppBar}=useContext(Update)
    const location=useLocation()
    useEffect(()=>{if(location.pathname==="/gym/music/search"){setDisplayAppBar("none")}},[])

  return (
    <div>
        <TextField placeholder="what do you want to listen to?" autoFocus sx={{backgroundColor:"white",width:{sm:"400px",lg:"500px"},borderRadius:"50px",ml:{sm:"13%",lg:"30%"},mt:{sm:"14%",lg:"5%"}}}
        InputProps={{
            startAdornment:<InputAdornment position="start"><SearchIcon/></InputAdornment>
            
        }}
        />
    </div>
  )
}

export default Search
