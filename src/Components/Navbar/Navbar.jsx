import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav'>
      <div className="nav-logo">LANarchy</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`menu-open ${isOpen ? 'show' : ''}`}>
        <a href="#">About Us</a>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Navbar;