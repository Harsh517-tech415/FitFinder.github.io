import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Update } from "../../App";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import { UserC } from "../../components/FitFinderInfo";
import Cookies from "js-cookie";
import AddIcon from "@mui/icons-material/Add";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../components/firebase";
import { motion } from "framer-motion";
const Customize = () => {
  const { setDisplayAppBar } = useContext(Update);
  let d = useRef(),
    data = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [searchValue, setSearchValue] = useState();
  const [option, setOption] = useState(1);
  const [disable, setDisable] = useState(true);
  const workoutname = useRef("");
  const [helperText, setHelperText] = useState();
  const userc = new UserC();
  const [display1, setDisplay1] = useState("ok");
  const [display2, setDisplay2] = useState("none");
  let a = Cookies.get("_hash");
  function getRandomColor(a) {
    let r = 255 - Math.floor(Math.random() * a);
    let b = 255 - Math.floor(Math.random() * a);
    let g = 255 - Math.floor(Math.random() * a);
    console.log(`rbg(${r},${b},${g})`);
    return `rgb(${r},${b},${g})`;
  }
  async function getData() {
    try {
      d.current = await getDoc(doc(db, "UserData", a));
      d.current = d.current.data();
    } catch (err) {
      console.log(err);
    }
  }

  async function createWorkout() {
    getData();
    if (d.current.name === undefined) {
      data.current = [workoutname.current.value];
      try {
        await setDoc(
          doc(db, "UserData", a),
          { name: data.current },
          { merge: true }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      data.current = [...d.current.name, workoutname.current.value];
      try {
        await updateDoc(
          doc(db, "UserData", a),
          { name: data.current },
          { merge: true }
        );
      } catch (err) {
        console.log(err);
      }
    }
    setValue(1);
  }

  useEffect(() => {
    if (location.pathname === "/gym/customize") {
      setDisplayAppBar("none");
    }
    async function setData() {
      await getData();
      if (d.current.name !== undefined) {
        setValue(1);
      } else {
        setValue(0);
      }
    }
    setData();
  }, []);
  return (
    <div>
      <Stack direction="row" sx={{ mt: { sm: "10%", lg: "5%" } }}>
        <Typography
          sx={{
            ml: { sm: "8%", lg: "18%" },
            fontWeight: { sm: "400", lg: "700" },
            fontSize: { sm: "35px", lg: "40px" },
          }}
        >
          Customized Workout
        </Typography>
        <Button
          fontSize="large"
          variant="text"
          onClick={() => {
            if (Cookies.get("_hash") === "b229jjcWX9sczZSgE3hL") {
              navigate("/signup");
            } else {
              setDisplay2("ok");
              setDisplay1("none");
              setDisable(false);
            }
          }}
          component={motion.button}
          whileHover={{ scale: 1.3, transition: { duration: 0.5 } }}
          sx={{ display: display1 }}
        >
          <AddIcon fontSize="small" sx={{ mb: "5%" }} />
        </Button>
        <TextField
          color="error"
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          inputRef={workoutname}
          placeholder="Workout Name"
          variant="standard"
          disabled={disable}
          helperText={helperText}
          sx={{ ml: "40px", display: display2, mt: { sm: "1%" } }}
        />

        <Button
          color="success"
          component={motion.button}
          whileHover={{ scale: 1.3 }}
          onClick={() => {
            setDisable(true);
            if (workoutname.current.value === "") {
              setHelperText("TextFiled is empty*");
              setDisable(false);
            } else {
              setHelperText("");
              workoutname.current.value = "";
              createWorkout();
              setDisplay2("none");
              setDisplay1("ok");
            }
          }}
          disabled={disable}
          sx={{ display: display2, mt: "1%" }}
        >
          <CheckIcon />
        </Button>
      </Stack>
      {value === 0 ? (
        <div>
          <CreateIcon
            sx={{
              color: "grey",
              mt: { sm: "400px", lg: "390px" },
              ml: { sm: "53%", lg: "40%" },
            }}
          />
          <Typography
            sx={{ color: "grey", mt: "1%", ml: { sm: "45%", lg: "36.3%" } }}
          >
            No customized workout
          </Typography>
        </div>
      ) : (
        <Grid
          id="slider"
          container
          direction="row"
          columns={{ sm: 2, md: 4, lg: 4 }}
          spacing={6}
          sx={{
            ml: { sm: "9%", lg: "19%" },
            width: { sm: "700px", lg: "1000px" },
            overflowY: "scroll",
          }}
        >
          {d.current.name.map((item) => (
            <Grid item>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.06, boxShadow: "0px 0px 1px 1px grey" }}
                transition={{ duration: 0.3 }}
                animate={{type:"spring"}}
              >
                <Box
                  sx={{
                    background: `linear-gradient(to right bottom,${getRandomColor(70)},${getRandomColor(150)})`,
                    width: "275px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {/* <AddIcon sx={{}}/> */}
                  <Typography
                    sx={{
                      alignItems: "center",
                      display: "inline-block",
                      color: "white",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
                <CardContent sx={{ width: "275px", height: "129px" }}>
                  {item}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Customize;
