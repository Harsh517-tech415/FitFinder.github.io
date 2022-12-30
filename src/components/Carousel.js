import Carousel from 'react-bootstrap/Carousel';
import peakpx from '../assets/images/peakpx.jpg'
import bg1 from '../assets/images/bg1.jpg'
import bg2 from '../assets/images/bg2.jpg'
import bg4 from '../assets/images/bg4.jpg'
import TypeWriterEffect from 'react-typewriter-effect'
function CarouselFadeExample() {
  const sec=document.getElementById("second")
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={peakpx}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="second">
        <img
          className="d-block w-100"
          src={bg1}
          alt="Second slide"
        />
          <Carousel.Caption style={{marginBottom:"300px",}}>
<TypeWriterEffect 
textStyle={{fontFamily:'NeueHaasGroteskDSPro,Arial,sans-serif',
fontWeight:"400",fontSize:"50px"}}
startDelay={50}
cursorColor="white"
text="Lift an appropriate amount of weight..."
typeSpeed={100}
// loop="true"
scrollArea={sec}
/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
          // style={{width:"40%", height:"40%"}}
        />
          <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg4}
          alt="Second slide"
          // style={{width:"40%", height:"40%"}}
        />
          <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      
    </Carousel>
  );
}

export default CarouselFadeExample;  