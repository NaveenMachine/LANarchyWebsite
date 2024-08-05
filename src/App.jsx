import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import image1 from './assets/image1Cropped.png'
import AboutUs from "./Components/AboutUs/AboutUs";
import Officers from "./Components/Officers/Officers";
import Footer from "./Components/Footer/Footer";
import './App.css';
import meeleeVid from './assets/meeleeVideo.mp4'

export const App = () => {
  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(true);

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
      
      <AboutUs/>
      <Officers/>
      <Footer/>
    </div>
    
  )
}

export default App;
