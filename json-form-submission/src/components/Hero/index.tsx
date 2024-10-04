import React, { FC } from 'react';
import './styles.css';
import HeroImg from '../../assets/hero-img.png';


const Index: FC = () => {
  return (
    <div className="hero">
       <img src={HeroImg} alt="hero" className="hero-image"/>
  
      <div className="running-text">
        Mumet Developer - UI/UX Ora kober
      </div>
    </div>
  );
};

export default Index;