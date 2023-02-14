import React, { useContext, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { Update } from "../../App";
import {Bar, Line}  from "react-chartjs-2";
import { Chart as ChatJS} from "chart.js/auto";

const DashboardGym = () => {
  const location = useLocation();
  const { setDisplayAppBar } = useContext(Update);
  const data = [
    { id: 1, year: 2016, userGain: 8000, userLost: 823 },
    { id: 2, year: 2026, userGain: 8300, userLost: 423 },
    { id: 3, year: 2036, userGain: 8300, userLost: 323 },
    { id: 4, year: 2416, userGain: 8040, userLost: 423 },
    { id: 5, year: 2015, userGain: 8500, userLost: 523 },
    { id: 6, year: 2616, userGain: 8600, userLost: 623 },
    { id: 7, year: 2716, userGain: 8700, userLost: 773 },
    { id: 8, year: 2816, userGain: 8800, userLost: 803 },
    { id: 9, year: 2916, userGain: 9000, userLost: 923 },
  ];
  useEffect(() => {
    if (location.pathname === "/gym/dashboardgym") {
      setDisplayAppBar("none");
    }
    // console.log()
  }, []);
  const [userdata,setUserData]=useState({
    labels:data.map((item)=>(item.year)),
datasets:[{
  label:"Users Gained",
  data:data.map((item)=>(item.userGain))
}],
datasets:[{
  label:"Users Lose",
  data:data.map((item)=>(item.userLost))
}]
})
  return (
    <div>
      {/* <Line  data={userdata}/> */}
    </div>
  );
};

export default DashboardGym;
