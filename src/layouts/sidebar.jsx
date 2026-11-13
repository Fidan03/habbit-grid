import Logo from '../assets/logo.png'
import 

function Sidebar() {

  return (
    <div>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="sections">
            <ul>
                <li>
                    <img src="" alt="" />
                    <p>Today</p>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className='newHbt'></div>
    </div>
  )
}

export default Sidebar