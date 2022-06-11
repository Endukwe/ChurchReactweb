import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

// import required modules
import { EffectCards } from "swiper";

const Testimony = () => {
  return (
    <>
      <div
        id="testimonies"
        className="py-5"
        style={{
          backgroundImage: "url('/images/blob-scatter-haikei (2).svg')",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "0px solid #697dac",
        }}
      >
        <div className="center pt-5 ">
          <h2>Testimonies</h2>
        </div>
        <p className=" center my-3 ps-2 pe-2">
          Our members have Testimonies to Gods power and Love
        </p>
        <Swiper
          autoplay={{ delay: 3000 }}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="swiper swiper_testimony"
        >
          <SwiperSlide className="swiper_testimony">
            <Card
              bg="secondary"
              className="pastor_card"
              style={{ width: "18rem", height: "100%" }}
            >
              <div className=" mx-auto" style={{ width: "8em", height: "8em" }}>
                <Card.Img
                  variant="top"
                  src="/images/T1.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>kingsley Umunna</Card.Title>
                <Card.Text>
                  This is a church and community that wholy embraces the modern
                  youths and there perculiar challenges.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper_testimony">
            <Card
              bg="secondary"
              className="pastor_card"
              style={{ width: "18rem", height: "100%" }}
            >
              <div className=" mx-auto" style={{ width: "8em", height: "8em" }}>
                <Card.Img
                  variant="top"
                  src="/images/T2.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Chukwuebuka Nduka</Card.Title>
                <Card.Text>
                  BSAC is a family of love, and members are always welcomed with
                  open arms.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper_testimony">
            <Card
              bg="secondary"
              className="pastor_card"
              style={{ width: "18rem", height: "100%" }}
            >
              <div className=" mx-auto" style={{ width: "8em", height: "8em" }}>
                <Card.Img
                  variant="top"
                  src="/images/T3.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Mr. Dan Dialaeme</Card.Title>
                <Card.Text>
                  Expect your blessings, miracles and breakthrough through Gods
                  anointed prophet in BSAC.
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};

export default Testimony;
