import { useState, useEffect } from 'react';
import './AboutUs.css';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image1 from '../../assets/image1.png';

export const AboutUs = ({ aboutCount }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imageStyle = {
        width: windowSize > 1000 ? "300px" : "300px",
        height: "auto",
        margin: "0 auto",
    };

    return (
        <div className="aboutUs">
            <h1 className="aboutTitle">About Us</h1>
            <div className={windowSize > 1000 ? "container-inline" : "container-stacked"}>
                <div className="aboutTxt">
                    <p>Welcome to Lanarchy!</p>
                    <p>At Lanarchy, our core mission is to cultivate a vibrant gaming community on Ohio State's campus. We host LAN parties and tournaments, featuring popular titles like Mario Kart, Halo, and Smash Bros.</p>
                    <p>We’re firm believers in the power of local multiplayer gaming to bring people together and forge genuine connections. Whether you're carting a console across campus or just bringing yourself, you'll find a warm welcome and a home at Lanarchy.</p>
                </div>
                <img src={image1} alt="" style={imageStyle} className="lanLogo" />
            </div>
        </div>
    );
};

export default AboutUs;
