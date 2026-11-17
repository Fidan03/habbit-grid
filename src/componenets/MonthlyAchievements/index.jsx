import styles from './styles.module.scss'

const Achievements = () => {
  return (
    <div className={styles.main}>
        <div className={styles.section}>
            <p>Current streak</p>
            <span>12 days</span>
        </div>
        <div className={styles.section}>
            <p>Best streak</p>
            <span>34 days</span>
        </div>
        <div className={styles.section}>
            <p>Completion this month</p>
            <span>82%</span>
        </div>
        <div className={styles.section}>
            <p>Total check-ins</p>
            <span>1,248</span>
        </div>
    </div>
  )
}

export default Achievements