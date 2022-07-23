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
        src="/images/pastordetails.jpeg"
        alt="caros"
        width='300px'
        height='300px'
      />
        </div>
        <div className='my-5'>
            <p>
        Prophet O. Eze is the founder and general overseer(GO) OF BLISSFUL SPRING ARK OF GOD CHURCH(CROWN OF GLORY).
        He hails from Affa Udi local government Area of Enugu state.
        He holds a Bsc in management (UNN) and an old boy of College of Immaculate Conception (CIC) Enugu state.
        After graduation he has worked with A-Z petroleum products and Zenith bank plc respectively.
        His divine calling after several years in the banking industry was mandated by the holy spirit to take the plunge and start touching lives,
        making life meaningful through the power of God Almighty.
        He desires to bring endless satidfaction, joy, peace, salvation, healing, breakthrough, victory to 
        people all over the and spreading the gospel and song ministration.
        One of his core dreams and driving force remains to break the sharkles of darkness and making the world 
        a better place for the children of God.
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