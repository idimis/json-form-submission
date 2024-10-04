import { FC } from "react";
import { Link } from "react-router-dom"; 
import './styles.css';

const Index: FC = () => {
  return (
    <header className="nav-container">
      <nav>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <div>
            @Adimas Barnwal
          </div>
        </Link>
        <div className="nav-list">
          <Link to="/about">About</Link> 
          <Link to="/work">Work</Link>
          <Link to="/contact-us">Contact</Link> 
        </div>
      </nav>
    </header>
  );
};

export default Index;
