import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import testing from "../assets/images/testing.png";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ boxShadow: "0px 0px 0px 0px white", mt: "4%" }}>
        <Box sx={{ m: "auto", width: { sm: "657px", lg: "1064px" } }}>
          <CardContent
            sx={{
              fontFamily: "sans-serif",
              pb: "2px",
              textAlign: "center",
              textAlignLast: "center",
              fontSize: { xs: "20px", sm: "30px", lg: "40px", xl: "50px" },
            }}
          >
            If you are healthy, you are wealthy
          </CardContent>
          <CardContent
            sx={{
              textAlign: "center",
              pt: "0px",
              fontSize: { xs: "10px", sm: "15px", xl: "18px" },
            }}
          >
            Transform your body, transform your life - with our fitness app.
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="error"
              sx={{
                mt: "2%",
                mb: "5%",
                p: "10px 30px",
                fontSize: { xs: "10px", sm: "13px", lg: "16px", xl: "18px" },
                borderRadius: "30px",
              }}
              onClick={() => {
                navigate("/explore");
              }}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Card>
      <Card sx={{ boxShadow: "0px 0px 0px 0px white" }}>
        <CardMedia component="img" src={testing} />
        <CardContent
          sx={{
            mt: "8%",
            textAlignLast: "center",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: { xs: "20px", sm: "30px", lg: "40px", xl: "50px" },
          }}
        >
          To enhance the efficacy of your workout.
        </CardContent>
      </Card>
      <Grid
        sx={{ justifyContent: "center" }}
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}
        columns={{ xs: 13, sm: 13, md: 13, lg: 13, xl: 13 }}
      >
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Card>
            <CardMedia component="img" src={testing} />
            <CardContent sx={{ fontWeight: "bold" }}>Explore</CardContent>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sunt sapiente cupiditate dolores consectetur in velit,
              sed architecto natus veritatis quisquam aliquid ducimus laboriosam
              ratione rem asperiores omnis. Voluptate, officia.
            </CardContent>
            <Button
              variant="text"
              color="warning"
              onClick={() => {
                navigate("/explore");
              }}
            >
              Explore <ArrowForward />
            </Button>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Card>
            <CardMedia component="img" src={testing} />
            <CardContent sx={{ fontWeight: "bold" }}>DashBoard</CardContent>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sunt sapiente cupiditate dolores consectetur in velit,
              sed architecto natus veritatis quisquam aliquid ducimus laboriosam
              ratione rem asperiores omnis. Voluptate, officia.
            </CardContent>
            <Button
              variant="text"
              color="warning"
              onClick={() => {
                navigate("dashboard");
              }}
            >
              Explore DashBoard <ArrowForward />
            </Button>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Card>
            <CardMedia component="img" src={testing} />
            <CardContent sx={{ fontWeight: "bold" }}>SignUp</CardContent>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sunt sapiente cupiditate dolores consectetur in velit,
              sed architecto natus veritatis quisquam aliquid ducimus laboriosam
              ratione rem asperiores omnis. Voluptate, officia.
            </CardContent>
            <Button
              variant="text"
              color="warning"
              onClick={() => {
                navigate("signup");
              }}
            >
              SignUp/SignIn <ArrowForward />
            </Button>
          </Card>
        </Grid>
      </Grid>



      <Stack rowGap={5} sx={{mt:"7%"}}>
        <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"center"}} columnSpacing={1} columns={{xs:12,sm:12,md:12,lg:12,xl:12}}>
          <Grid item xs={10} sm={10} md={5} lg={5} xl={5} >
            <CardMedia component="img" src={testing} />
          </Grid>

          <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
            <CardContent sx={{ fontWeight: "bold" }}>Gym</CardContent>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sunt sapiente cupiditate dolores consectetur in velit,
              sed architecto natus veritatis quisquam aliquid ducimus laboriosam
              ratione rem asperiores omnis. Voluptate, officia.
            </CardContent>
            <Button
              variant="text"
              color="warning"
              onClick={() => {
                navigate("/gym");
              }}
            >
              Explore Gym <ArrowForward />
            </Button>
          </Grid>
        </Grid>

        <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"center"}} columnSpacing={1} columns={{xs:12,sm:12,md:12,lg:12,xl:12}}>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
            <CardContent sx={{ fontWeight: "bold" }}>Gym</CardContent>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sunt sapiente cupiditate dolores consectetur in velit,
              sed architecto natus veritatis quisquam aliquid ducimus laboriosam
              ratione rem asperiores omnis. Voluptate, officia.
            </CardContent>
            <Button
              variant="text"
              color="warning"
              onClick={() => {
                navigate("/gym");
              }}
            >
              Explore Home Workout <ArrowForward />
            </Button>
          </Grid>
          <Grid item xs={10} sm={10} md={5} lg={5} xl={5} >
            <CardMedia component="img" src={testing} />
          </Grid>
        </Grid>
        
        <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"center"}} columnSpacing={1} columns={{xs:12,sm:12,md:12,lg:12,xl:12}}>
          <Grid item xs={10} sm={10} md={5} lg={5} xl={5} >
            <CardMedia component="img" src={testing} />
          </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
            <CardContent sx={{ fontWeight: "bold" }}>Gym</CardContent>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo sunt sapiente cupiditate dolores consectetur in velit,
              sed architecto natus veritatis quisquam aliquid ducimus laboriosam
              ratione rem asperiores omnis. Voluptate, officia.
            </CardContent>
            <Button
              variant="text"
              color="warning"
              onClick={() => {
                navigate("/gym");
              }}
            >
              Explore Home Workout <ArrowForward />
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Home;
