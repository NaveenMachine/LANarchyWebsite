import { useState, useEffect } from 'react';
import './Posters.css';
import Slider from '../Slider/Slider';
import amogus from '../../assets/Amogus.png';
import amogus2 from '../../assets/Amogus2.png';
import amogus3 from '../../assets/Amogus3.png';
import Bean from '../../assets/Bean.png';
import Duck from '../../assets/Duck.png';
import Halo from '../../assets/Halo.png';
import Smash from '../../assets/Smash.png';

const Posters = () => {
    const slides = [Bean, amogus, amogus2, amogus3, Halo, Duck, Smash];
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const containerStyles = {
        width: windowSize > 600 ? "800px" : "370px",
        height: windowSize > 600 ? "1100px" : "500px",
        margin: "0 auto",
    };

    return (
        <div className="posters-section">
            <div className="posters-container">
                <h1 className="posters-title">Poster Archive</h1>
                <p className="posters-subtitle">Check out our collection of event posters and announcements</p>
                
                <div className="slider-wrapper" style={containerStyles}>
                    <Slider slides={slides} />
                </div>
            </div>
        </div>
    );
};

export default Posters;
