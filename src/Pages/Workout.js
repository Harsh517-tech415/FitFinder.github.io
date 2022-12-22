import React from 'react'
import { LinearProgress } from '@mui/material/LinearProgress'
import { AppBar } from '@mui/material'
import { Stack } from '@mui/material'
import { Link} from "react-router-dom";

const Workout = () => {
  return (
    <div>
    {/* <AppBar poistion="sticky" style={{background:"white",height:"50px"}}> */}
    <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "4px", lg: "2px" },
          justifyContent: "none",
        }}
      >
      <Link>jdsd</Link>
      </Stack>
      {/* </AppBar> */}
    </div>
  )
}

export default Workout
