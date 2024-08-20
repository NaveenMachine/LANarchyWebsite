import './AboutUs.css'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image1 from '../../assets/image1.png'

export const AboutUs = ({aboutCount}) => {
    // if(aboutCount === 0) {
    //     return <img src={image2} alt="" />
    // } else if (aboutCount===1) {

    // }
  
    return (
    <div className = 'aboutUs'>
        <h1 className='aboutTitle'>Who We Are</h1>
        <div className='container'>
            <p className='aboutTxt'>Welcome to LANarchy! <div> At LANarchy, our core mission is to cultivate a vibrant gaming community on campus. We host LAN parties and tournaments, featuring popular titles like Mario Kart, Halo, and Smash Bros.</div>We’re film believers in the power of local multiplayer gaming to bring people together and forge genuine connections. Whether you're carting a console across campus or just bringing yourself, you'll find a warm welcome and a home at LANarchy.</p>
            
            <img className='photo' src={image1} alt="" />
        </div>
        
            
    </div>
  )
}

export default AboutUs;