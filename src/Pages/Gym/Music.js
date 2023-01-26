import { Stack,Box, Button, Typography } from '@mui/material'
import React, { useContext,useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Update} from '../../App'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Audio/Search';
import Feed from './Audio/Feed';
import Trending from './Audio/Trending';
import Player from './Audio/Player';
import Favourites from './Audio/Favourites';
import Library from './Audio/Library';

const Music = () => {
const location=useLocation()
const navigate=useNavigate();
const [case1,setCase]=useState(0);
const {setDisplayAppBar}=useContext(Update)
    useEffect(()=>{if(location.pathname==="/gym/music"){setDisplayAppBar("none")}},[])
  return (
    
    <Stack direction="row">
      <Box sx={{width:"155px",backgroundColor:"black"}}>
        <img />
        <Button sx={{color:"white",mt:"70%"}} onClick={()=>{navigate("/gym/music/feed");setCase(0)}}><MusicNoteIcon sx={{ml:"8px",mr:"8px"}}/>Feed</Button>
        <Button sx={{color:"white",mt:"20%"}} onClick={()=>{navigate("/gym/music/search");setCase(1) }} ><SearchIcon  sx={{ml:"8px",mr:"8px"}}/> Search</Button>
        <Button sx={{color:"white",mt:"20%"}} onClick={()=>{navigate("/gym/music/trending");setCase(2)}}><WhatshotIcon sx={{ml:"8px",mr:"8px"}}/>Trending</Button>
        <Button sx={{color:"white",mt:"20%"}} onClick={()=>{navigate("/gym/music/player");setCase(3)}}><PlayArrowIcon sx={{ml:"8px",mr:"8px"}}/>Player</Button>
        <Button sx={{color:"white",mt:"20%"}} onClick={()=>{navigate("/gym/music/favourites");setCase(4)}}><FavoriteIcon sx={{ml:"8px",mr:"8px"}}/>Favourites</Button>
        <Button sx={{color:"white",mt:"20%"}} onClick={()=>{navigate("/gym/music/library");setCase(5)}}><LibraryMusicIcon sx={{ml:"8px",mr:"8px"}}/>Library</Button>
      <Button sx={{color:"white",mt:"210%",mb:"29%"}} onClick={()=>{setCase(5)}}><ArrowBackIcon sx={{ml:"8px",mr:"10px"}}/>Back</Button>
      </Box>
      <Box sx={{width:"100%",backgroundColor:"rgb(22, 24, 29)"}}>
        {case1===0? <Feed/>:case1===1?<Search/>:case1===2?<Trending/>:case1===3?<Player/>:case1===4?<Favourites/>:case1===5?<Library/>:""}
      </Box>
    </Stack>
  )
}

export default Music
