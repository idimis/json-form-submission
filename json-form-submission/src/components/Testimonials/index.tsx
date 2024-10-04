import React, { FC } from 'react';
import './styles.css';
import Testi1 from '../../assets/ayushrajphoto.png';
import Testi2 from '../../assets/alexcattoniphoto.png';


const Index: FC = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonials</h2>
      </div>
      <div className="testimonials-container">
        <div className="testimonial">
          <p className="testimonial-text">
          Working with Adimas was like finding the last slice of pizza at a party—unexpected but totally delightful! They turned my vague ideas into a stunning website faster than I can say '404 Error.' I’m convinced they must have coded a spell for web magic because every time I refresh the page, it looks even better! Highly recommend if you want your website to look as great as my pizza cravings!"
          </p>
          <div className="testimonial-profile">
            <img src={Testi2} alt="Testimonial 2" className="testimonialsphoto" />
            <div className="testimonial-details">
              <p className="contributor-name">Alex Cattoni</p>
              <p className="contributor-position">CEO @VeryDemureVeryBossy</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
          "If you need a web developer who knows their HTML from their 'Huh, that’s not supposed to happen,' look no further than [Your Name]. They tackled my project with the precision of a cat chasing a laser pointer. I thought I was asking for a simple blog, but what I got was a digital masterpiece! Seriously, if websites were superheroes, Adimas would be wearing a cape—just watch out for the code errors flying around!"
          </p>
          <div className="testimonial-profile">
            <img src={Testi1} alt="Testimonial 1" className="testimonialsphoto" />
            <div className="testimonial-details">
              <p className="contributor-name">Ayush Raj</p>
              <p className="contributor-position">VP of Marketing @WarungBekicotFlow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
