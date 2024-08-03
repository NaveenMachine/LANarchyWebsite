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
                    <div ontouchstart="">
                        <div className="button">
                            
                            <a href="#"><img className="icons" src={iconsInstagram} alt="" /> Instagram</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div ontouchstart="">
                        <div className="button">
                             <a href="#"><img className="icons" src={iconsDiscord} alt="" /> Discord</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div ontouchstart="">
                        <div className="button">
                             <a href="#"><img className="icons" src={iconGmail} alt="" /> Email</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Hero;
