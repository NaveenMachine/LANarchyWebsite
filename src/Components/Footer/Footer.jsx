import './Footer.css'
import image1 from '../../assets/image1Cropped.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={image1} alt="" className='logo'/>
        <p>@ 2024 LANarchy. All rights reserved.</p>
        <ul>
            <li>
                <a href="#">
                    <span className="inner"></span>
                    <i className="icon-home"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="inner"></span>
                    <i className="icon-home"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="inner"></span>
                    <i className="icon-home"></i>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer