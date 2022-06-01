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
                
                .typeString("In the presence of the most high")
                .pauseFor(30000)
                
                .deleteAll()
                
                 .start();
            }}
          />
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                  .pauseFor(6000)
                .typeString("There is Joy")
                .pauseFor(1000)
                .deleteAll()
                .typeString("There is Freedom")
                .pauseFor(1000)
                .deleteAll()
                .typeString("There is Love")
                .pauseFor(1000)
                .deleteAll()
                .typeString("There is Grace")
                .pauseFor(1000)
                .deleteAll()
                .typeString("You are WELCOME to our family of LOVE")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
          {/* <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Feel the presence of the most high")
                .pauseFor(2000)
                
                
                .typeString(" where grace abounds")
                .deleteAll()
                .typeString("to the sanctuary of the most high")

                .pauseFor(3000)
                .deleteAll()
                .typeString("Grace is sufficient and God is the greatest")
                .start();
            }}
          /> */}
        </div>
      
      <div >
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
