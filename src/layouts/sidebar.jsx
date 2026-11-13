import Logo from '../assets/logo.png'
import today from '../assets/today.png'
import allHabits from '../assets/all habbits.png'
import statistics from '../assets/statistics.png'
import settings from '../assets/settings.png'

function Sidebar() {

  return (
    <div>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="sections">
            <ul>
                <li>
                    <img src={today} alt="today" />
                    <p>Today</p>
                </li>
                <li>
                    <img src={allHabbits} alt="all habits" />
                    <p>All habits</p>
                </li>
                                <li>
                    <img src={statistics} alt="statistics" />
                    <p>Statistics</p>
                </li>
                                <li>
                    <img src={settings} alt="settings" />
                    <p>Settings</p>
                </li>
            </ul>
        </div>
        <div className='newHbt'>
            <button><span>+</span>New habit</button>
        </div>
    </div>
  )
}

export default Sidebar