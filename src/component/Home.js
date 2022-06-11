import React from 'react'
import CarouselSlide from './CarouselSlide';
import About from './About';
import Ministries from './Ministries';
import Sermon from './Sermon';
import Pastor from './Pastor';
import PrayerRequest from './PrayerRequest';
import Testimony from './Testimony';
//import Blog from './Blog';

const Home = () => {
  return (
    <>
      <CarouselSlide/>
      <About/>
      <Ministries/>
      <Sermon/>
      <Pastor/>
      <PrayerRequest/>
      
      {/* <Blog/> */}
      <Testimony/>
    </>
  )
}

export default Home