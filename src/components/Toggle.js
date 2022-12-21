import { Switch} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Update } from "../App";
import icon1 from "../assets/icons/gym1.png";
import icon from "../assets/icons/gym.png";
import RedLeftArrow from "../assets/icons/left-arrow.png";
import BlueLeftArrow from "../assets/icons/left-arrow(1).png";
import BlueRightArrow from "../assets/icons/right-arrow.png";
import RedRightArrow from "../assets/icons/right-arrow(1).png";
const ToggleSwitch = () => {
  const { getColor } = useContext(Update);
  const [toggle, seToggle] = useState(true);
  const [Color, setColor] = useState("#FF2625");
  const [text, seText] = useState("black");
  const [boxColor, setboxColor] = useState("white");
  const [Icon, setIcon] = useState(icon);
  const [rightArrow, setrightArrow] = useState(RedRightArrow);
  const [leftArrow, setleftArrow] = useState(RedLeftArrow);
  useEffect(() => {
    toggle ? setColor("royalblue") : setColor("#FF2625");
    toggle ? seText("white") : seText("black");
    toggle ? setboxColor("hotpink") : setboxColor("white");
    toggle ? setIcon(icon1) : setIcon(icon);
    toggle ? setrightArrow(BlueRightArrow) : setrightArrow(RedRightArrow);
    toggle ? setleftArrow(BlueLeftArrow) : setleftArrow(RedLeftArrow);
    getColor(Color, text, boxColor, Icon, rightArrow, leftArrow);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  const toggler = () => {
    toggle === true ? seToggle(false) : seToggle(true);
    toggle
      ? (document.body.style.backgroundColor = "#0A1929")
      : (document.body.style.backgroundColor = "white");
  };
  return (
    <span className="switch">
      <Switch onClick={toggler} />
    </span>
  );
};

export default ToggleSwitch;
