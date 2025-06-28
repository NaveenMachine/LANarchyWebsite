import { useState, useEffect } from 'react';
import './AboutUs.css';
import lanarchyLogo from '../../assets/LanarchyLogo.png';

export const AboutUs = ({ aboutCount }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imageStyle = {
        width: windowSize > 1000 ? "350px" : "250px",
        height: "auto",
        margin: "0 auto",
    };

    return (
        <div className="aboutUs">
            <h1 className="aboutTitle">About Us</h1>
            <div className={windowSize > 1000 ? "container-inline" : "container-stacked"}>
                <div className="aboutTxt">
                    <h2 className="welcome-text">Welcome to Lanarchy!</h2>
                    <p className="mission-text">
                        At Lanarchy, our core mission is to cultivate a vibrant gaming community on Ohio State's campus. 
                        We host exciting LAN parties and tournaments, featuring popular titles like Mario Kart, Halo, 
                        and Super Smash Bros.
                    </p>
                    <p className="community-text">
                        We're firm believers in the power of local multiplayer gaming to bring people together and 
                        forge genuine connections. Whether you're carting a console across campus or just bringing 
                        yourself, you'll find a warm welcome and a home at Lanarchy.
                    </p>
                    {/* <div className="features">
                        <div className="feature">
                            <span className="feature-icon">🎮</span>
                            <span>Weekly Gaming Sessions</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🏆</span>
                            <span>Tournaments & Competitions</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🤝</span>
                            <span>Community Building</span>
                        </div>
                    </div> */}
                </div>
                <div className="logo-container">
                    <img src={lanarchyLogo} alt="Lanarchy Logo" style={imageStyle} className="lanLogo" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
