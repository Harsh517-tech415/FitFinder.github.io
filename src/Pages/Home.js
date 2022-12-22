import axios from 'axios'
import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router'
import { Update } from '../App'

const Home = () => {
const navigate=useNavigate()
  const {setNav,setVerify}=useContext(Update)
useEffect(()=>{
    axios.get("http://localhost:5500/login").then((response)=>{
      if(response.data.loggedIn===true){
        setNav('/logout')
        setVerify('Logout')
  }
else{
navigate('/signup')
}})
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Home
