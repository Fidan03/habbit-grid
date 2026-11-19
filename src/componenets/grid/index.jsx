import styles from './styles.module.scss'

const Grid = () => {
    const squires = Array.from({length: 365})
  return (
    <div className={styles.container}>
        {squires.map((_, index) => (
            <div key={{index}}></div>
        ))}
    </div>
  )
}

export default Grid