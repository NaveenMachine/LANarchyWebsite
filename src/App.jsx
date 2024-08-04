import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import image1 from './assets/image1.png'
import AboutUs from "./Components/AboutUs/AboutUs";
import Officers from "./Components/Officers/Officers";
import './App.css';

export const App = () => {
  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      
      <div className="image">
        <Navbar/>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero/> 
      </div>
      <AboutUs/>
      <Officers/>
    </div>
    
  )
}

export default App;
