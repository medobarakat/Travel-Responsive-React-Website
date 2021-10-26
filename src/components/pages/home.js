import React from 'react';
import '../../App.css';
import Cards from '../cards';
import HeroSection from '../herosection.js';
import Footer from './Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;