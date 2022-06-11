import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const PastorDetails = () => {
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
        <div>
        <img
        className="pastordetails_image center mx-auto"
        src="/images/P.jpg"
        alt="caros"
        width='200px'
        height='200px'
      />
        </div>
        <div className='my-5'>
            <p>
        Lorem ipsum dolor sit amet. Ipsum necessitatibus ut quae quas aut
          nesciunt velit aut rerum voluptates rem rerum consequuntur ut voluptas
          atque sed assumenda iste. Ut corporis dignissimos qui distinctio enim
          aut molestiae laboriosam 33 ipsum reprehenderit aut accusantium saepe
          ut soluta omnis aut impedit officiis? Sit dolorum ullam aut porro
          assumenda At consequatur cumque.
          </p>
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

export default PastorDetails