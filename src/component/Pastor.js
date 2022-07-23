import React from 'react';
import {Card, Button } from 'react-bootstrap'
import {LinkContainer,} from 'react-router-bootstrap'

const Pastor = () => {
  return (
    
    <div 
    style={{
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
  <Card.Img variant="top" src="/images/Prophet.png" className='img_rounded mt-2' />
  <Card.Body>
    <Card.Title><h3>Prophet Arthur Eze</h3></Card.Title>
    <Card.Text>
      An anointed prophet, teacher, servant and shepherd in the lords vineyard.
      
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