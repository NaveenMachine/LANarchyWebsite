import './Background.css'
import image1 from '../../assets/image1.png'
import meeleeVid from '../../assets/meeleeVideo.mp4'

export const Background = ({playStatus, heroCount}) => {
    if(playStatus)
    {
        return (
            <video className='background' autoPlay loop muted>
                <source src={meeleeVid} type='video/mp4's/>
            </video>
        )
    } else if (heroCount === 0) {
        return <img src={image1} className='background' alt="Background" />;
    }
    return null;
}

export default Background;


