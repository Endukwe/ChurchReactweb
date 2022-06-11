import React from "react";
import { Figure } from "react-bootstrap";

const Ministries = () => {
  return (
    <>
      <div id="ministries" className="my-0 pt-2" style={{
      backgroundImage:"url('/images/blob-scatter-haikei (2).svg')", 
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      }}>
        <div className="ministry_cont mt-5 mx-auto ">
          <h2>Our Ministries</h2>
        </div>
        <div className="ministry_cont my-3 mx-auto" style={{
          borderRadius:"20%"
        }}>
          <Figure style={{position:"relative", textAlign:"center"}} >
            <Figure.Image
              width={371}
              height={380}
              alt="171x180"
              src="/images/Men.jpg"
              
            />
            <Figure.Caption style={{position:"absolute", top:"50%", left:"50%", }}>
              <h3 className="ministry_cont mx-auto" style={{color:"white"}} >Mens Ministry.</h3>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="ministry_cont mx-auto">
        <Figure style={{position:"relative", textAlign:"center"}} >
            <Figure.Image
              width={371}
              height={380}
              alt="171x180"
              src="/images/Women.jpg"
              
            />
            <Figure.Caption style={{position:"absolute", top:"50%", left:"50%", }}>
              <h3 className="ministry_cont mx-auto" style={{color:"white"}} >Ladies Ministry.</h3>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="ministry_cont mx-auto">
        <Figure style={{position:"relative", textAlign:"center"}} >
            <Figure.Image
              width={371}
              height={380}
              alt="171x180"
              src="/images/youth.jpg"
              
            />
            <Figure.Caption style={{position:"absolute", top:"50%", left:"50%", }}>
              <h3 className="ministry_cont mx-auto" style={{color:"white"}} >Youths Ministry.</h3>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="ministry_cont mx-auto">
        <Figure style={{position:"relative", textAlign:"center"}} >
            <Figure.Image
              width={371}
              height={380}
              alt="171x180"
              src="/images/Kids.jpg"
              
            />
            <Figure.Caption style={{position:"absolute", top:"50%", left:"50%", }}>
              <h3 className="ministry_cont mx-auto" style={{color:"white"}} >Kids & Teens Ministry.</h3>
            </Figure.Caption>
          </Figure>
      </div>
      </div>
    </>
  );
};

export default Ministries;
