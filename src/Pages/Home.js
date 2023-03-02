import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import testing from '../assets/images/testing.png'
const Home = () => {
const navigate=useNavigate();

  return (
    <>
    <Card sx={{boxShadow:"0px 0px 0px 0px white",mt:{xs:"10%",sm:"10%",lg:"5%"},m:"auto",width:{sm:"500px",lg:"1000px"}}}>
      <CardContent sx={{textAlignLast:"center",fontSize:{xs:"30px",sm:"44px",lg:"50px",xl:"60px"}}}>If you are healthy, you are wealthy</CardContent>
    <CardContent sx={{textAlign:"center",mt:{sm:"2%"},fontFamily:"CiscoSans,sans-serif",fontSize:{xl:"18px"}}}>Transform your body, transform your life - with our fitness app.</CardContent>
    </Card>
    <Button variant="contained" color="error" sx={{fontSize:"15px",m:{xs:"",sm:"2% 47%",lg:"",xl:""},borderRadius:"20px"}} onClick={()=>{navigate('/explore')}}>
     Explore 
    </Button>
    <Card sx={{boxShadow:"0px 0px 0px 0px white"}}>
      <CardMedia component="img" src={testing}/>
    <CardContent sx={{mt:"8%",textAlignLast:"center",display:"flex",justifyContent:"center",textAlign:"center",textAlignLast:"center",fontSize:{xs:"30px",sm:"47px",lg:"50px",xl:"60px"}}}>To enhance the efficacy of your workout.</CardContent>
    </Card>
    <Grid sx={{justifyContent:"center"}} container rowSpacing={2} columnSpacing={{md:2,lg:2,xl:2}} columns={{xs:4,sm:8,md:18,lg:30}}>
      <Grid item xs={4} sm={6} md={7} lg={9}>
      <Card  >
        <CardMedia component="img" src={testing}/>
      </Card>
      </Grid>
      <Grid item xs={4} sm={6} md={7}  lg={9}>
      <Card >
        <CardMedia component="img" src={testing}/>
      </Card>
      </Grid>
      <Grid item xs={4} sm={6} md={7} lg={9}>
      <Card >
        <CardMedia component="img" src={testing}/>
      </Card>
      </Grid>
    </Grid>
    </>
  )
}

export default Home
