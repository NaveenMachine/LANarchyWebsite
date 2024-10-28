import './Posters.css'
import Slider from '../Slider/Slider'
import amogus from '../../assets/Amogus.png'
import amogus2 from '../../assets/Amogus2.png'
import amogus3 from '../../assets/Amogus3.png'
import Bean from '../../assets/Bean.png'
import Duck from '../../assets/Duck.png'
import Halo from '../../assets/Halo.png'
import Smash from '../../assets/Smash.png'


const Posters = () => {
    const slides = [Bean, amogus, amogus2, amogus3, Halo, Duck, Smash]
    const containerStyles = {
        width: "700px",
        height: "900px",
        margin: "0 auto",
      };

  return (
    <div className='posters'>
        <h1 className='postersTitle'>Poster Archive</h1>
        <div style={containerStyles}>
        <Slider slides={slides}/>
      </div>
        
    </div>
  )
}

export default Posters;