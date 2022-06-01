import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";

const About = () => {
  return (
  
    <div className="about_container" id="about" style={{
      
      backgroundImage:"url(/images/blob-scatter-haikei.svg)", 
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: "0px solid #697dac"}} >
      <div style={{position:"relative"}}>
        <img src="/images/dove.png" alt="dove" className="dove_img"/>
        <div className="about_block">
      <div className="about_heading my-0 mx-auto">
        <h1>Blissful Spring Arc Of God Church</h1>
      </div>
      
      <Container>
        <p>
          Lorem ipsum dolor sit amet. Ipsum necessitatibus ut quae quas aut
          nesciunt velit aut rerum voluptates rem rerum consequuntur ut voluptas
          atque sed assumenda iste. Ut corporis dignissimos qui distinctio enim
          aut molestiae laboriosam 33 ipsum reprehenderit aut accusantium saepe
          ut soluta omnis aut impedit officiis? Sit dolorum ullam aut porro
          assumenda At consequatur cumque.
        </p>
      </Container>
      <div className="about_joinUs mt-5 mb-1 mx-auto ">
        <h2>Join Us</h2>
      </div>
      <Container>
      <div className="about_joinUstext mx-auto">
        <p>Worship with us at 22 heavens road eziowelle rd on :</p>
      </div>
      </Container>
      </div>
      </div>
      <CardGroup className="pb-2 mx-auto">
  <Card bg="secondary" className="pastor_card mx-auto"  style={{ width: '18rem',
  borderRadius:"2em"
 }}>
    <Card.Img variant="top" src="/images/sundayservice.jpg" style={{borderRadius:"2em"}} />
    <Card.Body>
      <Card.Title>Sunday</Card.Title>
      <h3>Holy Ghost Service</h3>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p className="">10am (WAT) Weekly</p>
    </Card.Footer>
  </Card>
  <Card bg="secondary" className="pastor_card mx-auto"  style={{ width: '18rem',
  borderRadius:"2em" }}
  >
    <Card.Img variant="top" src="/images/biblestudy.jpg" style={{borderRadius:"2em"}} />
    <Card.Body>
      <Card.Title>Wednesday</Card.Title>
      <h3>Bible Study</h3>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <> <p className="">5pm (WAT) Weekly</p></>
    </Card.Footer>
  </Card>
  <Card bg="secondary" className="pastor_card mx-auto"  style={{ width: '18rem',
borderRadius:"2em" }}>
    <Card.Img variant="top" src="/images/fridayworship.jpg" style={{borderRadius:"2em"}}/>
    <Card.Body>
      <Card.Title>Friday</Card.Title>
      <h3>Glory Worship</h3>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p className="">6pm (WAT) Weekly</p>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
    
  );
};

export default About;
