import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

export const App = () => {
  let heroData = [
    {text1:"LANarchy",text2:"Welcome Humble Gamers."}
  ]
  const [heroCount, setHeroCount] = useState(0); 
  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar/>
      <Hero/> 
    </div>
  )
}

export default App;
