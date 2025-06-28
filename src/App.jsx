import { useState, useEffect } from "react";
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
//import MNavBar from "./Components/MaterialNavBar/MNavBar"
import image1 from './assets/image1Cropped.png';
import AboutUs from "./Components/AboutUs/AboutUs";
import Officers from "./Components/Officers/Officers";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Posters from "./Components/Posters/Posters";
//import Footer from "./Components/MaterialFooter/MaterialFooter"
import projectPlusImage from './assets/LanarchyAvif/2025-02-09_ProjectPlusNight_1_web.avif';
import haloMCCImage from './assets/LanarchyAvif/2024-10-06_HaloMCCNight_1_web.avif';

import './App.css';

export const App = () => {
  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(true);
  const [aboutCount, setAboutCount] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const slides = [projectPlusImage, haloMCCImage];
  
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
      <div className="hero-section">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar/>
        <Hero className="caption"/> 
      </div>
      
      <div style={{ backgroundColor: 'black'}}>
      {/* Adding id for About Us section */}
      <section id="about-us">
        <AboutUs aboutCount={aboutCount} />
      </section>

      {windowSize > 600 ? (
        <div id="slider" style={containerStylesWeb}>
          <Slider slides={slides}/>
        </div>
      ) : (
        <div id="slider" style={containerStylesMobile}>
          <Slider slides={slides}/>
        </div>
      )}

      {/* Adding id for Officers section */}
      <section id="officers">
        <Officers />
      </section>

      {/* Adding id for Membership/Registration section */}
      <section id="membership">
        <Registration />
      </section>

      {/* Adding id for Posters section */}
      <section id="posters">
        <Posters />
      </section>

      <section id="about-us" style={{ paddingTop: "20px" }}>
        <Footer />
      </section>
      
      </div>
    </div>
  );
};

export default App;
