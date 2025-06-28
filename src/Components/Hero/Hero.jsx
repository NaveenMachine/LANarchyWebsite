import './Hero.css'
import iconGmail from '../../assets/iconGmail.png'
import iconsDiscord from '../../assets/iconsDiscord.png'
import iconsInstagram from '../../assets/iconInstagramSolid.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-title">
            <div className="neon-sign">Lanarchy</div>
        </div>
        <div className="address">
            <ul className='addressList'>
                <li>
                    <div>
                        <a 
                            href="https://www.google.com/maps/place/Bradley+Hall/@39.996628,-83.0159443,17z/data=!3m1!4b1!4m6!3m5!1s0x88388ebff353c76b:0xe3c9beb51ffecc8b!8m2!3d39.996628!4d-83.0133694!16s%2Fg%2F1hm37h783?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-link"
                        >
                            Bradley Hall Lobby
                        </a>
                    </div>
                </li>
                <li><div>Sundays at 6:00PM</div></li> 
            </ul>
        </div>
        <div className="contact-list">
            <ul className="social-buttons">
                <li>
                    <a href="https://www.instagram.com/lanarchyosu" className="social-button instagram">
                        <span className="icon"><img className="icons" src={iconsInstagram} alt="Instagram" /></span> 
                        <span className="text">Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/xfDzKmFzCT" className="social-button discord">
                        <span className="icon"><img className="icons" src={iconsDiscord} alt="Discord" /></span>
                        <span className="text">Discord</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:LANarchyOSU@gmail.com" className="social-button email">
                        <span className="icon"><img className="icons" src={iconGmail} alt="Email" /></span>
                        <span className="text">Email</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Hero;
