import Logo from '../assets/logo.png'
import today from '../assets/today.png'
import allHabits from '../assets/all habbits.png'
import statistics from '../assets/statistics.png'
import settings from '../assets/settings.png'
import styles from './sidebar.module.scss'

function Sidebar() {

  return (
    <div className={styles.sidebar}>
        <div className={styles.logoSections}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            
            <div className={styles.sections}>
                <ul>
                    <li className={styles.eachSection}>
                        <img src={today} alt="today" />
                        <p>Today</p>
                    </li>
                    <li className={styles.eachSection}>
                        <img src={allHabits} alt="all habits" />
                        <p>All habits</p>
                    </li>
                    <li className={styles.eachSection}>
                        <img src={statistics} alt="statistics" />
                        <p>Statistics</p>
                    </li>
                    <li className={styles.eachSection}>
                        <img src={settings} alt="settings" />
                        <p>Settings</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.newHbt}>
            <button><span>+</span>New habit</button>
        </div>
    </div>
  )
}

export default Sidebar