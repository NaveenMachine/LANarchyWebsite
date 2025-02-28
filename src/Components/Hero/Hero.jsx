import './Hero.css'
import iconGmail from '../../assets/iconGmail.png'
import iconsDiscord from '../../assets/iconsDiscord.png'
import iconsInstagram from '../../assets/iconInstagramSolid.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-title">
            <div>Lanarchy</div>
        </div>
        <div className="address">
            <ul className='addressList'>
                <li><div>Bradley Hall Lobby</div></li>
                <li><div>Sundays at 6:00PM</div></li> 
            </ul>
            
            
        </div>
        <div className="contact-list">
            <ul style={{ display: "flex", gap: "3vw", justifyContent: "center", padding: 0 }}>
                <li>
                    <div>
                        <div className="button">
                            <a href="https://www.instagram.com/lanarchyosu">
                                <span className="icon"><img className="icons" src={iconsInstagram} alt="" /></span> 
                                <span className="text">Instagram</span>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className="button">
                            <a href="https://discord.gg/xfDzKmFzCT">
                                <span className="icon"><img className="icons" src={iconsDiscord} alt="" /></span>
                                <span className="text">Discord</span>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className="button">
                             <a href="mailto:LANarchyOSU@gmail.com">
                                <span className="icon"><img className="icons" src={iconGmail} alt="" /></span>
                                <span className="text">Email</span>
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
