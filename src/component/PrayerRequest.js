import React from 'react';
import {Card, Button} from 'react-bootstrap'

const PrayerRequest = () => {
  return (
    <div id='requestprayer' className='center mt-0 pt-3'  style={{
      backgroundImage:"url('/images/blob-scatter-haikei (3).svg')", 
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: "0px solid #697dac"}}>
    <Card className="pastor_card bg-dark text-white " style={{ width: '18rem' }}>
  <Card.Img src="/images/pexels-pixabay-267559.jpg" alt="Card image" className='pastor_card'/>
  <Card.ImgOverlay className='Img_overlay d-flex align-items-end '>
      <div>
    <Card.Title>PrayerRequest</Card.Title>
    <Card.Text className='text-light'>
     You can request for Prayer or book an appointment with the Pastor
    </Card.Text>
    
    <Button className='bg-dark text-light '>Request</Button>
    </div>
  </Card.ImgOverlay>
</Card>
    </div>
  )
}

export default PrayerRequest