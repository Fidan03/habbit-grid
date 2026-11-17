import Logo from '../../assets/logo.png'
import styles from './sidebar.module.scss'
import Sections from '../../componenets/allSections/Sections'

function Sidebar() {

  return (
    <div className={styles.sidebar}>
        <div className={styles.logoSections}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>

            <div>
                <Sections/>
            </div>
        </div>
        
        <div className={styles.newHbt}>
            <button><span>+</span>New habit</button>
        </div>
    </div>
  )
}

export default Sidebar