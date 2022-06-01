import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card} from "react-bootstrap";

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
                  src="/images/pexels-pixabay-267559.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Pastor Arthur Eze</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  src="/images/pexels-pixabay-267559.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Pastor Arthur Eze</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  src="/images/pexels-pixabay-267559.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Pastor Arthur Eze</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  src="/images/pexels-pixabay-267559.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Pastor Arthur Eze</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  src="/images/pexels-pixabay-267559.jpg"
                  className="img_test mt-2"
                />
              </div>

              <Card.Body>
                <Card.Title>Pastor Arthur Eze</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
