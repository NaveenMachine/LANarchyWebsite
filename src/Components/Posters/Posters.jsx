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

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const containerStyles = {
        width: windowSize > 600 ? "800px" : "370px",
        height: windowSize > 600 ? "1100px" : "500px",
        margin: "0 auto",
    };

    return (
        <div className="flex-container">
            <div><h1 className='postersTitle'>Poster Archive</h1></div>
            <div style={containerStyles}>
                <Slider slides={slides} />
            </div>
        </div>
    );
};

export default Posters;
