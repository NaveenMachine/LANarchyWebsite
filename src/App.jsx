import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import image1 from './assets/image1Cropped.png'
import AboutUs from "./Components/AboutUs/AboutUs";
import Officers from "./Components/Officers/Officers";
import Slider from "./Components/Slider/Slider"
import Footer from "./Components/Footer/Footer";
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'


import './App.css';
import meeleeVid from './assets/meeleeVideo.mp4'

export const App = () => {
  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(true);
  const [aboutCount, setAboutCount] = useState(0);
  const slides = [image2, image3, image4, image5]
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div>
      
      <div className="video-container">
          <video autoPlay loop muted>
            <source src={meeleeVid} type='video/mp4'/>
          </video>
        <Navbar className="caption"/>
        {/* <Background playStatus={playStatus} heroCount={heroCount} /> */}
        <Hero className="caption"/> 
      </div>
      
      <AboutUs aboutCount = {aboutCount}/>
      <div style={containerStyles}>
        <Slider slides={slides}/>
      </div>
      <Officers/>
      <Footer/>
    </div>
    
  )
}

export default App;
