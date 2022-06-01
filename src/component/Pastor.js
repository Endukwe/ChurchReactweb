import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Pastor = () => {
  return (
    
    <div style={{
      backgroundImage:"url('/images/blob-scatter-haikei (3).svg')", 
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: "0px solid #697dac"}}>
    <div className='center pt-5 mb-2'>
        <h2>Meet the Pastor</h2>
    </div>
    
    <div className='center'>
    
    <Card bg="secondary" className='pastor_card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/pexels-pixabay-267559.jpg" className='img_rounded mt-2' />
  <Card.Body>
    <Card.Title>Pastor Arthur Eze</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <LinkContainer to='pastordetails'>
    <Button variant="primary"  className="text-light bg-dark" >Read More</Button>
    </LinkContainer>
  </Card.Body>
</Card>

</div>

    </div>
   
  )
}

export default Pastor