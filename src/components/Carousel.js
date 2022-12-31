import Carousel from "react-bootstrap/Carousel";
import peakpx from "../assets/images/peakpx.jpg";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg4 from "../assets/images/bg4.jpg";
import Typewriter from "typewriter-effect";
import { Typography } from "@mui/material";
function CarouselFadeExample() {
  return (
    <Carousel fade style={{dataInterval:"1"}}>
      <Carousel.Item>
        <img className="d-block w-100" src={peakpx} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="second">
        <img className="d-block w-100" src={bg1} alt="Second slide" />
        <Carousel.Caption>
          <Typography sx={{fontWeight:{sm:"900",lg:"1000"},fontSize:{sm:"32px",lg:"60px"},mb:{sm:"170px",lg:"500px"}}}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span style="color:#1e88e5">Form </span> and <span style="color:#1e88e5">Posture</span> of workouts matter more than weights and reps.')
                  .start()
                  .typeString("")
              }}
              options={{
                loop:true
              }}
            />
          </Typography>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />
        <Carousel.Caption>
<Typography sx={{fontWeight:{sm:"900",lg:"1000"},fontSize:{sm:"30px",lg:"60px"},mb:{sm:"170px",lg:"500px"}}}>
  <Typewriter
  onInit={(typewriter)=>{typewriter.typeString('It is <span style="color: #ff1744">important</span> to change your<span style="color: #76ff03"> workout routines</span> and<span style="color: #1e88e5"> explore</span> till you find the routine that gives you the best results.').start()}}
options={{loop:true}}/>
</Typography>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg4}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Typography sx={{fontWeight:{sm:"900",lg:"1000"},fontSize:{sm:"30px",lg:"60px"},mb:{sm:"170px",lg:"500px"}}}>
  <Typewriter
  onInit={(typewriter)=>{typewriter.typeString('Don’t be <span style="color:#009688">random </span>with your <span style="color:#ff1744">workout</span>, have a <span style="color:#76ff03">routine</span> set up by a <span style="color:#29b6f6">trainer</span>.').start()}}
options={{loop:true}}/>
</Typography>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
