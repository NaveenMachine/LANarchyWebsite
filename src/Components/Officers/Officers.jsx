import './Officers.css'

const Officers = () => {
  return (
    <div className='officers'>
        <h1>Officers</h1>
        <ul>
            <li className='officerName'>
                <div className="position"><b>President</b></div>
                <span className='name'>Mason Bindemann.3</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Vice President</b></div>
                <span className='name'>Nolan Freyhof.10</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Treasurer</b></div>
                <span className='name'>Samuel Langer.56</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Website Officer</b></div>
                <span className='name'>Naveen Kamath.62</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Advisor</b></div>
                <span className='name'>Jesse Schotter.1</span>
            </li>
        </ul>
    </div>
  )
}

export default Officers;