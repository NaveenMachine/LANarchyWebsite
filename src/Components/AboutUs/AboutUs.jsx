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
            <p className='aboutTxt'>Welcome to our Video Game Club! <div> We are a passionate community of gamers who come together to share our love for all things gaming. Our club meets regularly to discuss our favorite games, exchange tips and tricks, and enjoy multiplayer sessions. We host a variety of activities, including tournaments, game reviews, and themed nights.</div> Stay updated with the latest industry trends and releases with us. Join our dynamic and engaging community today and take your gaming experience to the next level!</p>
            
            <img className='photo' src={image1} alt="" />
        </div>
        
            
    </div>
  )
}

export default AboutUs;