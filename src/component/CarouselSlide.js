import React from "react";
import { Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const CarouselSlide = () => {
  const style = {
    backgroundImage: "url(/images/mobilehero.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    //border:"2px solid #697dac",

    "@media (minWidth: 400px)": {
      backgroundImage: "url(/images/desktophero.png)",
    },
  };
  return (
    <div className="carouselcont" style={style}>
      <div className="typing">
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              
              .typeString("In the Presence of the Most High")
              .pauseFor(300000)
              .start()
              
          }}
        />
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(5000)
              
              .typeString("There is JOY")
              .pauseFor(1000)
              .deleteAll()
              .typeString("There is LIBERATION")
              .pauseFor(1000)
              .deleteAll()
              .typeString("There is HEALING")
              .pauseFor(1000)
              .deleteAll()
              .typeString("There is LOVE")
              .pauseFor(1000)
              .deleteAll()
              .typeString("There is GRACE")
              .pauseFor(1000)
              .deleteAll()
              
              .start();
          }}
        />
      </div>

      <div>
        <Button className="carousel_button bg-dark text-light ">Join Us</Button>
      </div>

      <img
        className="carousel_image"
        src="/images/wave-haikei (1).svg"
        alt="caros"
      />
    </div>
  );
};

export default CarouselSlide;
