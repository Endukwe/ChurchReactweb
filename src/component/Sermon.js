import React from "react";
import { Card, Button, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";

const Sermon = () => {
  return (
    <div
    id="sermon"
      className="sermon"
      style={{
        backgroundImage: "url(/images/blob-scatter-haikei.svg)",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "0px solid #697dac",
      }}
    >
      <div className="sermon_heading my-0 pt-5">
        <h2> New sermon</h2>
      </div>
      <Container>
      <p className="center">Explore and listen to the latest sermons by our 
        churchs Pastor added daily and available for download in various formats</p>
        </Container>
      <>
        <Swiper
          autoplay={{ delay: 3000 }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper swiper_sermon"
        >
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title className="text-dark">Fruits of the spirit</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content....
                </Card.Text>
                <Button variant="primary" className="bg-dark text-light">Explore more</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title  className="text-dark">Faith and Love</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content...
                </Card.Text>
                <Button variant="primary" className="bg-dark text-light">Explore</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title  className="text-dark">Running the good race</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content...
                </Card.Text>
                <Button variant="primary" className="bg-dark text-light">Explore</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title  className="text-dark">The Divine Breakthrough</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content...
                </Card.Text>
                <Button className="bg-dark text-light" variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title  className="text-dark">Time and tide</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content...
                </Card.Text>
                <Button className="bg-dark text-light" variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Sermon;
