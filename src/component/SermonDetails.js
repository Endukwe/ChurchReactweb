import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SermonDetails = () => {
  return (
    <div  className="py-5"
    style={{
      backgroundImage: "url('/images/blob-scatter-haikei (2).svg')",
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      border: "0px solid #697dac",
    }}>
    <Container >
       
        <div className='my-5'>
           <h1>
             Sermons is COMING SOON in various digital formats
           </h1>
        </div>
        <div>
            <LinkContainer to='/'>
            <Button className='bg-dark text-light'>Go back</Button>
            </LinkContainer>
        </div>
    </Container>
    </div>
  )
}

export default SermonDetails