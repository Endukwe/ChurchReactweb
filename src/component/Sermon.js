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
import { LinkContainer } from "react-router-bootstrap";

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
        Prophet added daily and available for download in various formats</p>
        </Container>
      <>
        <Swiper
          autoplay={{ delay: 4000 }}
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
                <Card.Title  className="text-dark sermon-tittle">Faith at Work</Card.Title>
                <Card.Text>
                  Mattew 21:22 says:'And whatever you ask in prayer, you will receive if you have faith'.
                  Grooming your faith like a battle tool...
                </Card.Text>
                <LinkContainer to='sermondetails'>
                <Button className="bg-dark text-light" variant="primary">Explore</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title className="text-dark sermon-tittle mx-auto">Fruits of the spirit</Card.Title>
                <Card.Text>
                  How to embrace the virtues of galatians 5:22-23 and lead a happier and 
                 fulfilled life....
                </Card.Text>
                <LinkContainer to='sermondetails'>
                <Button className="bg-dark text-light" variant="primary">Explore</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "18rem" }}>
              
              <Card.Body>
                <Card.Title  className="text-dark sermon-tittle">The Divine Breakthrough</Card.Title>
                <Card.Text>
                  Isaiah 43:19 "Behold i will do a new thing; now it shall spring forth; shall ye not know it?
                  i will make a way in the wilderness and rivers in the desert"...
                </Card.Text>
                <LinkContainer to='sermondetails'>
                <Button className="bg-dark text-light" variant="primary">Explore</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </SwiperSlide>
         
        </Swiper>
      </>
    </div>
  );
};

export default Sermon;
