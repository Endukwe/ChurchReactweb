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
        <h1>Blissful Spring Arc Of God Church (Crown of Glory)</h1>
      </div>
      
      <Container>
        <p>
          BSAC is a bible-believing christian community that guides all into a clear path
          of lasting joy, happiness, peace, safety and protection.
          We strive and stand on the purpose of aligning all to their divine destiny by drawing the community
          closer to God, while being inspired by the word of God, music and prayers.
          <br/>Our mission and vision as a church is to help people all over get revived to a new life, new beginning,
          be liberated, healed, freed from captivity and affliction, while adding meaning to their lives through
          the holy spirit that has mandated the church.
        </p>
      </Container>
      <div className="about_joinUs mt-5 mb-1 mx-auto ">
        <h2>Join Us</h2>
      </div>
      <Container>
      <div className="about_joinUstext mx-auto">
        <p>No 31 Anam Street, Omagba phase II Onitsha, Anambra State.</p>
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
      <h3>Church Service</h3>
      <Card.Text>
        Worship with us on Sundays, for a spirit filled encounter with the Word of God,
        Worship and prayers. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p className="">9:00 A.M (WAT) Weekly</p>
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
        Feed your heart and mind with Gods word as we study and illuminate on teachings that 
        are practical and spiritual to impact your life positively.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <> <p className="">4:00 P.M - 5:30 P.M (WAT) Weekly</p></>
    </Card.Footer>
  </Card>
  <Card bg="secondary" className="pastor_card mx-auto"  style={{ width: '18rem',
borderRadius:"2em" }}>
    <Card.Img variant="top" src="/images/councel.png" style={{borderRadius:"2em"}}/>
    <Card.Body>
      <Card.Title>Saturday</Card.Title>
      <h3>Councelling</h3>
      <Card.Text>
        Have a private councelling and prayer session with the prophet of God. The spirit 
        moves and things of the spirit are revealed by God for his glory and our upliftment. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p className="">9:00 A.M - 12:00 P.M  (WAT) Weekly</p>
    </Card.Footer>
  </Card>
  <Card bg="secondary" className="pastor_card mx-auto"  style={{ width: '18rem',
borderRadius:"2em" }}>
    <Card.Img variant="top" src="/images/fridayworship.jpg" style={{borderRadius:"2em"}}/>
    <Card.Body>
      <Card.Title>Last Friday of the Month</Card.Title>
      <h3>Night of Bliss</h3>
      <Card.Text>
        Join us for the night of bliss every last friday of the month, as we Worship, Pray, Anoint, 
        Break Bonds, Liberate, Manifest Miracles and experience Divine Healing from the most High.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p className="">10:00 P.M - 4:00 A.M  (WAT)</p>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
    
  );
};

export default About;
