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

    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/lanarchyosu',
            icon: iconsInstagram,
            color: '#E4405F'
        },
        {
            name: 'Discord',
            url: 'https://discord.gg/xfDzKmFzCT',
            icon: iconsDiscord,
            color: '#5865F2'
        },
        {
            name: 'Email',
            url: 'mailto:LANarchyOSU@gmail.com',
            icon: iconGmail,
            color: '#EA4335'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    <img 
                        src={image1} 
                        alt="Lanarchy Logo" 
                        className="footer-logo-img"
                        style={{
                            width: windowSize > 1000 ? "60px" : "40px",
                            height: "auto"
                        }}
                    />
                    <h3 className="footer-logo-text">Lanarchy</h3>
                </div>

                {/* Social Links Section */}
                <div className="footer-social">
                    <h4 className="social-title">Connect With Us</h4>
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${link.name} page`}
                                style={{ '--hover-color': link.color }}
                            >
                                <img 
                                    src={link.icon} 
                                    alt={`${link.name} icon`} 
                                    className="social-icon"
                                />
                                <span className="social-tooltip">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="footer-contact">
                    <h4 className="contact-title">Get In Touch</h4>
                    <p className="contact-email">
                        <a href="mailto:LANarchyOSU@gmail.com">
                            LANarchyOSU@gmail.com
                        </a>
                    </p>
                    <p className="contact-location">
                        Ohio State University
                    </p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="copyright">
                        © 2024 Lanarchy. All rights reserved.
                    </p>
                    <div className="footer-links">
                        <a href="#about-us">About</a>
                        <a href="#officers">Officers</a>
                        <a href="#membership">Membership</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
