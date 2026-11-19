import styles from './styles.module.scss'
import read from '../../assets/habit-book.svg'
import fire from '../../assets/ui-flame.svg'
import check from '../../assets/ui-check.svg'

const HabitList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.habitDesc}>
            <div className={styles.icon}>
                <img src={read} alt="reading" />
            </div>
            <div className={styles.desc}>
                <p className={styles.title}>Read 20 pages</p>
                <p className={styles.subtitle}>20 pages <span>everyday</span></p>
            </div>
        </div>

        <div className={styles.count}>
          <div className={styles.streak}>
            <img src={fire} alt="flame" />
            <p>12</p>
          </div>
          <div className={styles.checkbox}>
            <img src={check} alt="checkbox" />
          </div>
        </div>
    </div>
  )
}

export default HabitList