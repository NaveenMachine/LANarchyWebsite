import './Officers.css'

const Officers = () => {
  return (
    <div className='officers'>
        <h1>Officers</h1>
        <ul>
            <li className='officerName'>
                <div className="position"><b>President</b></div>
                <span className='name'>Mason Binndiman</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Vice President (External)</b></div>
                <span className='name'>Sammy Langer</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Vice President (Internal)</b></div>
                <span className='name'>Nolan Freyhof</span>
            </li>
            <li className='officerName'>
                <div className="position"><b>Treasurer</b></div>
                <span className='name'>Keagan Freyhof</span>
            </li>
        </ul>
    </div>
  )
}

export default Officers;