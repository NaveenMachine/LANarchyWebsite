import { useState, useEffect } from 'react';
import './Footer.css';
import image1 from '../../assets/image1Cropped.png';
import iconGmail from '../../assets/iconGmail.png';
import iconsDiscord from '../../assets/iconsDiscord.png';
import iconsInstagram from '../../assets/iconInstagramSolid.png';

const Footer = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imageStyle = {
        width: windowSize > 1000 ? "40px" : "30px",
        height: "auto",
        margin: "0 auto",
    };

    return (
        <div className='Footer'>
            <img src={image1} alt="" style={imageStyle} className='logo' />
            
            <div className="contact-lists">
                <ul>
                    <li>
                        <span>
                            <span className="buttons">
                                <a href="https://www.instagram.com/lanarchyosu">
                                    <span><img className="pics" src={iconsInstagram} alt="" /></span> 
                                </a>
                            </span>
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className="buttons">
                                <a href="https://discord.gg/xfDzKmFzCT">
                                    <span><img className="pics" src={iconsDiscord} alt="" /></span>
                                </a>
                            </span>
                        </span>
                    </li>
                    <li>
                        <span>
                            <span className="buttons">
                                <a href="mailto:LANarchyOSU@gmail.com">
                                    <span><img className="pics" src={iconGmail} alt="" /></span>
                                </a>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <p style={{ color: 'white' }}>@ 2024 Lanarchy. All rights reserved.</p>
        </div>
    );
};

export default Footer;
