import './Background.css'
import image1 from '../../assets/image1.png'

export const Background = ({heroCount}) => {
    if(heroCount===0)
    {
        return <img src={image1} className='background' alt="Background" />;
    }
    return null;
}

export default Background;


