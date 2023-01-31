import React from "react";
import chest1 from "../../assets/images/chest1.jpg";
import chest2 from "../../assets/images/chest2.jpg";
import chest3 from "../../assets/images/chest3.png";
import abs1 from "../../assets/images/abs1.jpg";
import abs2 from "../../assets/images/abs2.jpg";
import abs3 from "../../assets/images/abs3.webp";
import arm1 from "../../assets/images/arm1.webp";
import arm2 from "../../assets/images/arm2.jpg";
import arm3 from "../../assets/images/arm3.webp";
import leg1 from "../../assets/images/leg1.jpg";
import leg2 from "../../assets/images/leg2.jpg";
import leg3 from "../../assets/images/leg3.webp";
import back1 from "../../assets/images/back1.jpg";
import back2 from "../../assets/images/back2.webp";
import back3 from "../../assets/images/back3.webp";
import FullBody from "../../assets/images/FullBody.jpg";
import LowerBody from "../../assets/images/LowerBody.jpg";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
const GymInfo = () => {
  const g = [
    "bodyweight incline side plank",
    "weighted russian Twist",
    "dumbbell side bend",
    "Cable side crunch",
    "barbell standing Twist",
    "barbell standing ab rollerout",
  ];

  const getInfo = async () => {
    const a = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );
    let g1 = g.map((e) =>
      a.filter((f) => {
        return (
          f.target.toLowerCase().includes(e) ||
          f.name.toLowerCase().includes(e) ||
          f.equipment.toLowerCase().includes(e) ||
          f.bodyPart.toLowerCase().includes(e)
        );
      })
    );
    //   let g2=g1.map((e)=>(e.map((f)=>(f.gifUrl))))
    console.log(g1);
  };
  return (
    <div>
      <Button sx={{ margin: "0px 0px" }} onClick={getInfo}>
        ok
      </Button>
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
  );
};

export default GymInfo;
export const images = [
  { image: FullBody, title: "FullBody" },
  { image: LowerBody, title: "LowerBody" },
  { image: abs1, title: "Abs Beginner" },
  { image: abs2, title: "AbsIntermediate" },
  { image: abs3, title: "Advance" },
  { image: chest1, title: "Chest Beginner" },
  { image: chest2, title: "Chest Intermediate" },
  { image: chest3, title: "Chest Advance" },
  { iamge: arm1, title: "Arm Beginner" },
  { image: arm2, title: "Arm Intermedite" },
  { image: arm3, title: "Arm Advance" },
  { image: leg1, title: "Leg Beginner" },
  { image: leg2, title: "Leg Intermediate" },
  { image: leg3, title: "Leg Advance" },
  { image: back1, title: "Shoulder & Back Beginner" },
  { image: back2, title: "Shoulder & Back Intermediate" },
  { image: back3, title: "Shoulder & Back Advance" },
];
export const exercisebeginner = [
  [],
  [],
  [
    {
      bodyPart: "Cardio",
      equipment: "Body Weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1160.gif",
      id: "1160",
      ml: "10%",
      reps: "x14",
      side: 0,
      name: "Burpee",
      target: "cardiovascular system",
    },
    {
      bodyPart: "Waist",
      equipment: "Cable",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0175.gif",
      id: "0175",
      ml: "10%",
      reps: "x12",
      side: 0,
      name: "Cable Kneeling Crunch",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Cable",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0862.gif",
      id: "0862",
      ml: "10%",
      reps: "x12",
      side: 0,
      name: "Cable Twist (up-down)",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Body Weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0472.gif",
      id: "0472",
      ml: "10%",
      reps: "x8",
      side: 0,
      name: "Hanging Leg Raise",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "wheel roller",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0857.gif",
      id: "0857",
      ml: "10%",
      reps: "x14",
      side: 0,
      name: "Wheel Rollerout",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Body Weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
      id: "0006",
      ml: "10%",
      reps: "x14",
      side: 0,
      name: "Alternate Heel Touchers",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Body Weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3544.gif",
      id: "3544",
      ml: "10%",
      reps: "00:20",
      side: 0,
      name: "Bodyweight Incline Side Plank",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Body Weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0472.gif",
      id: "0472",
      ml: "10%",
      reps: "x8",
      side: 0,
      name: "Hanging Leg Raise",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Body Weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3665.gif",
      id: "3665",
      ml: "10%",
      reps: "x16",
      side: 8,
      name: "Power Point Plank",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Cable",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0175.gif",
      id: "0175",
      ml: "10%",
      reps: "x12",
      side: 0,
      name: "Cable Kneeling Crunch",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Cable",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0223.gif",
      id: "0223",
      ml: "10%",
      reps: "x12",
      side: 0,
      name: "Cable Side Crunch",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Barbell",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0103.gif",
      id: "0103",
      ml: "10%",
      reps: "x12",
      side: 0,
      name: "Barbell Standing Ab Rollerout",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Barbell",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0112.gif",
      id: "0112",
      ml: "10%",
      reps: "x12",
      side: 0,
      name: "Barbell Standing Twist",
      target: "abs",
    },
    {
      bodyPart: "Waist",
      equipment: "Wheel Roller",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0857.gif",
      id: "0857",
      ml: "10%",
      reps: "x14",
      side: 0,
      name: "Wheel Rollerout",
      target: "abs",
    },
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
export const exercises = [
  "fullbody",
  "lowerbody",
  "absb",
  "absi",
  "absa",
  "chestb",
  "chesti",
  "chesta",
  "armb",
  "armi",
  "arma",
  "legb",
  "legi",
  "lega",
  "s&bb",
  "s&bi",
  "s&ba",
];
export const time = [0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

