import './Background.css'
import image1 from '../../assets/image1.png'
import heroImage from '../../assets/HeroImage.png'

export const Background = ({playStatus, heroCount}) => {
    if(playStatus)
    {
        return <img src={heroImage} className='background' alt="Hero Background" />;
    } else if (heroCount === 0) {
        return <img src={image1} className='background' alt="Background" />;
    }
    return null;
}

export default Background;
