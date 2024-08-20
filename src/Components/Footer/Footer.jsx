import './Footer.css'
import image1 from '../../assets/image1Cropped.png'
import iconGmail from '../../assets/iconGmail.png'
import iconsDiscord from '../../assets/iconsDiscord.png'
import iconsInstagram from '../../assets/iconInstagramSolid.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={image1} alt="" className='logo'/>
        
        <div className="contact-lists">
            <ul>
                <li>
                    <span onTouchStart="">
                        <span className="buttons">
                            <a href="https://www.instagram.com/lanarchyosu">
                                <span ><img className="pics" src={iconsInstagram} alt="" /></span> 
                                
                                
                            </a>
                        </span>
                    </span>
                </li>
                <li>
                    <span onTouchStart="">
                        <span className="buttons">
                            <a href="https://discord.gg/xfDzKmFzCT">
                                <span><img className="pics" src={iconsDiscord} alt="" /></span>
                                
                            </a>
                        </span>
                    </span>
                </li>
                <li>
                    <span onTouchStart="">
                        <span className="buttons">
                             <a href="mailto:LANarchyOSU@gmail.com">
                                <span ><img className="pics" src={iconGmail} alt="" /></span>
                                
                             </a>
                        </span>
                    </span>
                </li>
            </ul>
        </div>
        <p>@ 2024 LANarchy. All rights reserved.</p>
    </div>
  )
}

export default Footer