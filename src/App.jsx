import { useState, useEffect } from "react";
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import image1 from './assets/image1Cropped.png';
import AboutUs from "./Components/AboutUs/AboutUs";
import Officers from "./Components/Officers/Officers";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Posters from "./Components/Posters/Posters";
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

import './App.css';
import meeleeVid from './assets/minecraftVid.mp4';

export const App = () => {
  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(true);
  const [aboutCount, setAboutCount] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const slides = [image2, image3, image4, image5];
  
  const containerStylesMobile = {
    width: "370px",
    height: "230px",
    margin: "0 auto",
  };

  const containerStylesWeb = {
    width: "700px",
    height: "400px",
    margin: "0 auto",
  };

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={meeleeVid} type='video/mp4'/>
        </video>
        <Navbar className="caption"/>
        <Hero className="caption"/> 
      </div>
      
      <AboutUs aboutCount={aboutCount} />

      {windowSize > 600 ? (
        <div style={containerStylesWeb}>
          <Slider slides={slides}/>
        </div>
      ) : (
        <div style={containerStylesMobile}>
          <Slider slides={slides}/>
        </div>
      )}

      <Officers/>
      <Registration/>
      <Posters/>
      <Footer/>
    </div>
  );
};

export default App;
