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
        <div className="nav-logo" 
          style={{
            width: "25vh",
            height: "6vh",
            display: "flex",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            alignContent: "flex-start",
          }
        }
         
        >LANarchy</div>
        <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={`menu-open ${isOpen ? 'show' : ''}`}>
            <a href="#">AI Multi-console Display</a>
            {/* Add more links as needed */}
        </div>
    </div>

    </div>
    
  );
};

export default Navbar;