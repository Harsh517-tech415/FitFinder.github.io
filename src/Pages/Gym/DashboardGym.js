import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChatJS } from "chart.js/auto";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import Cookies from "js-cookie";
import { Button } from "@mui/joy";
import { Box } from "@mui/material";


const DashboardGym = () => {
  const location = useLocation();
  const { setDisplayAppBar } = useContext(Update);
  const displayData = useRef(null);
  const [option,setOption]=useState(false)
  useEffect(() => {
    if (location.pathname === "/gym/dashboardgym") {
      setDisplayAppBar("none");
    }
    async function getDate() {
      try {
        let chartData = await getDoc(
          doc(db, "Chart", `${Cookies.get("_hash")}`)
        );
        chartData = chartData.data();

        displayData.current = {
          labels: chartData.Date.map((item)=>(item)),
          datasets: [
            {
              label:"Workout",
              data: chartData.Workout.map((item) => (item)),
              backgroundColor: "red",
              borderColor: "red",
              tension:1
            },
            {
              label:"Time",
              data: chartData.Time.map((item) => (item)),
              backgroundColor: "lightgreen",
              borderColor: "lightgreen",
              tension:1
            },
            {
              label:"Kcal",
              data: chartData.Kcal.map((item) => (item)),
              backgroundColor: "blue",
              borderColor: "blue",
              tension:1
            },
          ],
        };
        setOption(1)
      } catch (err) {
        console.log(err);
      }
    }
    getDate();
  }, []);

 

  return (
    <div>
     { option?<Box sx={{width:{md:"1200px",lg:"1450",xl:"1600px"},height:{md:"600px",lg:"700px",xl:"900px"}}}><Line responsive="true" data={displayData.current} /></Box>:<Button sx={{m:"30% 0% 0% 50%"}} loading variant="plain"></Button>}
    </div>
  );
};

export default DashboardGym;
