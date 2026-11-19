import Date from '../../componenets/date'
import HabitList from '../../componenets/habitList'
import Achievements from '../../componenets/monthlyAchievements'
import Progress from '../../componenets/progressBar'
import styles from './index.module.scss'


function Main() {

  return (
    <div className={styles.main}>
        <div className={styles.nav}>
            <div><Date/></div>

            <div className={styles.general}>
                <p className={styles.greeting}>Good Afternon</p>
                <p className={styles.accomplished}>You've done <span>3 of 5</span> habits today</p>
            </div>

            <div className={styles.achieved}>
                <Achievements/>
            </div>
        </div>

        <div className={styles.habitList}>
            <div className={styles.habitsHeader}>
                <p>Today's habits</p>
                <div className={styles.progress}><Progress/></div>
            </div>
            <div className={styles.habitList}>
                <HabitList/>
                <HabitList/>
                <HabitList/>
                <HabitList/>
                <HabitList/>
            </div>
        </div>

        <div>
            <div>
                <p>Your year</p>
                <p>1,248 check-ins in the last 12 months</p>
            </div>

            <div className={styles.grid}>

            </div>
        </div>
    </div>
  )
}

export default Main