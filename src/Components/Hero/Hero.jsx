import './Hero.css'
import iconGmail from '../../assets/iconGmail.png'
import iconsDiscord from '../../assets/iconsDiscord.png'
import iconsInstagram from '../../assets/iconInstagramSolid.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-title">
            <p>LANarchy Club @OSU</p>
        </div>
        <div className="address">
            <p>Baker Systems 198</p>
            <p>Wednesdays at 7:00PM</p>
            <p>2070 Neil Ave, Columbus, OH 43210</p>
        </div>
        <div className="contact-list">
            <ul>
                <li>
                    <div onTouchStart="">
                        <div className="button">
                            <a href="https://www.instagram.com/lanarchyosu">
                                <span class= "icon"><img className="icons" src={iconsInstagram} alt="" /></span> 
                                <span class= "text" >Instagram</span>
                                
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div onTouchStart="">
                        <div className="button">
                            <a href="https://discord.gg/xfDzKmFzCT">
                                <span class= "icon"><img className="icons" src={iconsDiscord} alt="" /></span>
                                <span class= "text">Discord</span>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div onTouchStart="">
                        <div className="button">
                             <a href="mailto:LANarchyOSU@gmail.com">
                                <span class= "icon"><img className="icons" src={iconGmail} alt="" /></span>
                                <span class= "text">Email</span>
                             </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Hero;
