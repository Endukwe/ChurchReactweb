import React from "react";
import { Card, Button } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Mousewheel, Pagination,  Autoplay } from "swiper";

const Blog = () => {

  return (
    
    <div 
    className="pt-3"
    id="blog"
    style={{
      backgroundImage:"url('/images/blob-scatter-haikei (3).svg')", 
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: "0px solid #697dac"}}>
    <div className="center my-0 pt-5">
      <h2>Pastors Blog Posts</h2>
      
    </div>
    <div className="center mx-2"><p>Check latest blog post of our pastor on various topics of discourse</p></div>
      <Swiper
      autoplay={{delay: 3000}}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        style={{ overflow: "none", position: "relative" }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="myswiper swiper_blog  mt-4"
      >
        <SwiperSlide className=""style={{ width: '100%', height:'100%'}}>
        <Card className="blogcard mx-auto">
  <Card.Img variant="top" src="/images/Blog1.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="bg-dark">Go somewhere</Button>
  </Card.Body>
</Card>
</SwiperSlide>
<SwiperSlide className=""style={{ width: '100%', height:'100%'}}>
        <Card className="blogcard mx-auto " >
  <Card.Img variant="top" src="/images/Blog02.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="bg-dark text-light">Read</Button>
  </Card.Body>
</Card>
</SwiperSlide>
<SwiperSlide className=""style={{ width: '100%', height:'100%'}}>
        <Card className="blogcard mx-auto">
  <Card.Img variant="top" src="/images/Blog03.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary"className="bg-dark text-light">Read</Button>
  </Card.Body>
</Card>
</SwiperSlide>
<SwiperSlide className=""style={{ width: '100%', height:'100%'}}>
        <Card className="blogcard mx-auto">
  <Card.Img variant="top" src="/images/Blog04.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="bg-dark text-light">Read</Button>
  </Card.Body>
</Card>
</SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Blog