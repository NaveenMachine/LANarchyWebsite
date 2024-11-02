import React, { useState } from 'react';
import './Navbar.css';
import image1 from '../../assets/image1Cropped.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav'>
        <div
          className="nav-logo"
          style={{
            width: "25vh",
            height: "6vh",
            display: "flex",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          Lanarchy
        </div>

        <div className="hamburgerPosition">
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`menu-open ${isOpen ? 'show' : ''}`}>
            <a href="#about-us" onClick={toggleMenu}>About Us</a>
            <a href="#officers" onClick={toggleMenu}>Officers</a>
            <a href="#membership" onClick={toggleMenu}>Membership</a>
            <a href="#posters" onClick={toggleMenu}>Posters</a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
