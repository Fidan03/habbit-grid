import Date from '../../componenets/date'
import Progress from '../../componenets/progressBar'
import styles from './index.module.scss'


function Main() {

  return (
    <div className={styles.main}>
        <div className={styles.nav}>
            <p><Date/></p>

            <div className={styles.general}>
                <p className={styles.greeting}>Good Afternon</p>
                <p className={styles.accomplished}>You've done <span>3 of 5</span> habits today</p>
            </div>

            <div className={styles.achieved}>
                <div>
                    <p>Current streak</p>
                    <span>12 days</span>
                </div>
                <div>
                    <p>Best streak</p>
                    <span>34 days</span>
                </div>
                <div>
                    <p>Completion this month</p>
                    <span>82%</span>
                </div>
                <div>
                    <p>Total check-ins</p>
                    <span>1,248</span>
                </div>
            </div>
        </div>

        <div>
            <div>
                <p>Today's habits</p>
                <div className={styles.progress}></div>
            </div>
            <div className={styles.taskList}>
                <Progress/>
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