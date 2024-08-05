import React, { useState } from 'react';
import './Navbar.css';
import image1 from '../../assets/image1Cropped.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
        <div className='nav'>
        <div className="nav-logo">LANarchy</div>
        <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={`menu-open ${isOpen ? 'show' : ''}`}>
            <a href="#">Simultaneous Multi-console Display</a>
            {/* Add more links as needed */}
        </div>
    </div>

    </div>
    
  );
};

export default Navbar;