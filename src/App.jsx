import { useState, useEffect } from "react";
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import MNavBar from "./Components/MaterialNavBar/MNavBar"
import image1 from './assets/image1Cropped.png';
import AboutUs from "./Components/AboutUs/AboutUs";
import Officers from "./Components/Officers/Officers";
import Slider from "./Components/Slider/Slider";
//import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Posters from "./Components/Posters/Posters";
import Footer from "./Components/MaterialFooter/MaterialFooter"
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
    <div >
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={meeleeVid} type='video/mp4'/>
        </video>
        {/* <Navbar className="caption"/> */}
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
