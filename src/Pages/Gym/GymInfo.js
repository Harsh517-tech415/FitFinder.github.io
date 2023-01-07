import React from 'react'
import chest1 from '../../assets/images/chest1.jpg'
import chest2 from '../../assets/images/chest2.jpg'
import chest3 from '../../assets/images/chest3.png'
import abs1 from '../../assets/images/abs1.jpg'
import abs2 from '../../assets/images/abs2.jpg'
import abs3 from '../../assets/images/abs3.webp'
import arm1 from '../../assets/images/arm1.webp'
import arm2 from '../../assets/images/arm2.jpg'
import arm3 from '../../assets/images/arm3.webp'
import leg1 from '../../assets/images/leg1.jpg'
import leg2 from '../../assets/images/leg2.jpg'
import leg3 from '../../assets/images/leg3.webp'
import back1 from '../../assets/images/back1.jpg'
import back2 from '../../assets/images/back2.webp'
import back3 from '../../assets/images/back3.webp'
import FullBody from "../../assets/images/FullBody.jpg";
import LowerBody from "../../assets/images/LowerBody.jpg";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { Button, Typography } from '@mui/material'
import Card from '@mui/material/Card';
const GymInfo = () => {
const g=["bodyweight incline side plank","weighted russian Twist","dumbbell side bend","Cable side crunch","barbell standing Twist","barbell standing ab rollerout"]

const getInfo=async()=>{          
const a= await fetchData("https://exercisedb.p.rapidapi.com/exercises",
exerciseOptions);
let g1=g.map((e)=>(a.filter((f)=>{
    return (
      f.target.toLowerCase().includes(e) ||
      f.name.toLowerCase().includes(e) ||
      f.equipment.toLowerCase().includes(e) ||
      f.bodyPart.toLowerCase().includes(e)
    );
  })))
//   let g2=g1.map((e)=>(e.map((f)=>(f.gifUrl))))
console.log(g1)
}
  return (
    <div>

      <Button sx={{margin:"0px 0px"}}onClick={getInfo}>ok</Button>
   <Card>
    {/* <CardContent> */}
{/* <img src={image[1]} /> */}
    {/* </CardContent> */}
{/* {
g2.map((index)=>(
<CardMedia component="img" image={index}/>))  
} */}
   </Card>
    </div>
  )
}

export default GymInfo

export const exercisebeginner=[
[],[],
[
{bodyPart: 'Cardio', equipment: 'Body Weight', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1160.gif', id: '1160',ml:"10%", reps:"x12",name: 'Burpee',target:"cardiovascular system"},
{bodyPart: 'Waist', equipment: 'Cable', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0175.gif', id: '0175',ml:"10%", reps:"x12",name: 'Cable Kneeling Crunch',target:"abs"},
{bodyPart: 'Waist', equipment: 'Cable', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0862.gif', id: '0862',ml:"10%", reps:"x12",name: 'Cable Twist (up-down)', target:"abs"},
{bodyPart: 'Waist',  equipment: 'Body Weight', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0472.gif', id: '0472',ml:"10%", reps:"x12",name: 'Hanging Leg Raise',target:"abs"},
{bodyPart: 'Waist', equipment: 'wheel roller', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0857.gif', id: '0857',ml:"10%",reps:"x14", name: 'Wheel Rollerout',target:"abs"},
{bodyPart: 'Waist', equipment: 'Body Weight', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif', id: '0006',ml:"10%", reps:"x14",name: 'Alternate Heel Touchers',target:"abs"},
{bodyPart: 'Waist', equipment: 'Body Weight', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3544.gif', id: '3544',ml:"10%",reps:"x12", name: 'Bodyweight Incline Side Plank',target:"abs"},
{bodyPart: 'Waist',  equipment: 'Body Weight', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0472.gif', id: '0472',ml:"10%", reps:"x12",name: 'Hanging Leg Raise',target:"abs"},
{bodyPart: 'Waist',  equipment: 'Body Weight', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3665.gif', id: '3665',ml:"10%",reps:"00:20" ,name: 'Power Point Plank',target:"abs"},
{bodyPart: 'Waist', equipment: 'Cable', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0175.gif', id: '0175',ml:"10%", reps:"x12",name: 'Cable Kneeling Crunch',target:"abs"},
{bodyPart: 'Waist', equipment: 'Cable', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0223.gif', id: '0223',ml:"10%",reps:"x12", name: 'Cable Side Crunch',target:"abs"},
{bodyPart: 'Waist', equipment: 'Barbell', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0103.gif', id: '0103',ml:"10%", reps:"x12",name: 'Barbell Standing Ab Rollerout',target:"abs"},
{bodyPart: 'Waist', equipment: 'Barbell', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0112.gif', id: '0112',ml:"10%",reps:"x12", name: 'Barbell Standing Twist',target:"abs"},
{bodyPart: 'Waist', equipment: 'Wheel Roller', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0857.gif', id: '0857',ml:"10%",reps:"x14", name: 'Wheel Rollerout',target:"abs"},
],
[],[],[],[],[],[],[],[],[],[],[],[],[],[]
]
export const exercises = ["fullbody","lowerbody","absb","absi","absa","chestb","chesti","chesta","armb","armi","arma","legb","legi","lega","s&bb","s&bi","s&ba"];
export const time=[0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


export const Beginner=
  [{
    label1:"Workout",
    label2:"KCAL",
    caption:"ABS",
    image:abs1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    // ml:"100px"
    link:"/gym/absb"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    link:"/gym/chestb"
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:arm1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    link:"/gym/armb"
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:leg1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    link:"/gym/legb"

    // ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:back1,
    beginner:"inline",
    intermediate:"none",
    advance:"none",
    ml:"0px",
    link:"/gym/s&bb"

  },]
  export const Intermediate=
  [{
    label1:"Workout",
    label2:"KCAL",
    caption:"ABS",
    image:abs2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    link:"/gym/absi"
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    // ml:"100px"
    link:"/gym/chesti"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:arm2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    // ml:"100px"
    link:"/gym/armi"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:leg2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    link:"/gym/legb"

    // ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:back2,
    beginner:"inline",
    intermediate:"inline",
    advance:"none",
    ml:"0px",
    link:"/gym/s&bi"

  },]
  export const Advance=
  [{
    label1:"Workout",
    label2:"KCAL",
    caption:"ABS",
    image:abs3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"100px"
    link:"/gym/absb"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"CHEST",
    image:chest3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    link:"/gym/chesta",
    // ml:"100px"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"ARM",
    image:arm3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    // ml:"100px"
    link:"/gym/arma"
  },{
    label1:"Workout",
    label2:"KCAL",
    caption:"LEG",
    image:leg3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    link:"/gym/legb"
    // ml:"100px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"SHOULDER & BACK",
    image:back3,
    beginner:"inline",
    intermediate:"inline",
    advance:"inline",
    link:"/gym/s&ba"
    // ml:"0px"
  },]
  export const challenge=[
    {
    label1:"Workout",
    label2:"KCAL",
    caption:"FULL BODY",
    image:FullBody,
    beginner:"none",
    intermediate:"none",
    advance:"none",
    link:"/gym/fullbody"

    // ml:"75px"
  },
  {
    label1:"Workout",
    label2:"KCAL",
    caption:"LOWER BODY",
    image:LowerBody,
    beginner:"none",
    intermediate:"none",
    advance:"none",
    link:"/gym/lowerbody"

    // ml:"60px"
  }
]