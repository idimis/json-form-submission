// landingpage index.tsx
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Overlay from '../../components/Overlay';
import Work from '../../components/Work';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Workrow from '../../components/Workrow';
import Testimonials from '../../components/Testimonials';
import Burger from '../../components/Burger';
import { Link } from 'react-router-dom'; 


import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Overlay />
      <About />
      <Burger />
      <Work />
      <Workrow />
      <Testimonials />
      <Link to="/work"/>
      <Link to="/about">
      <Link to="/contact-us"> 
        <button className="contact-button">Contact Us</button>
      </Link>
      </Link>
      <Footer />
    </div>
  );
};

export default LandingPage;
