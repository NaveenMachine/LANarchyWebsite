import { useState, useEffect } from 'react';
import './Officers.css'

const Officers = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={windowSize > 600 ? 'officersWeb' : 'officersMobile'}>
        <h1 className='officeTitle'>Officers</h1>
        <ul>
            <li className='officerName'>
                <div className="position"><b>President</b></div>
                <span className='name'>Mason Bindemann</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Vice President</b></div>
                <span className='name'>Nolan Freyhof</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Treasurer</b></div>
                <span className='name'>Samuel Langer</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Website Officer</b></div>
                <span className='name'>Naveen Kamath</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Community Officer</b></div>
                <span className='name'>Lance Bance</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Tech Officer</b></div>
                <span className='name'>Roshan Robinson</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Advisor</b></div>
                <span className='name'>Jesse Schotter</span>
            </li>
        </ul>
    </div>
  )
}

export default Officers;