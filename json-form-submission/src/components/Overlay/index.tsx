import { FC, useState, useEffect } from "react";
import Slideout from "../Slideout";
import './styles.css';

const Overlay: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("dark-overlay");
    } else {
      document.body.classList.remove("dark-overlay");
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`overlay-menu ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleMenu}
      >
        <span className="emoji">👋</span>
        {isHovered && <span className="text">Hi I’m Adimas</span>}
      </div>
      {isMenuOpen && <div className="menu-overlay open" onClick={toggleMenu}></div>} 
      <Slideout isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
};

export default Overlay;
