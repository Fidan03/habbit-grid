import styles from './index.module.scss'
import sections from '../../data/sections'

function Sections() {

  return (
            <div className={styles.sections}>
                <ul>
                    {sections.map((section) => (
                        <li id={section.id}>
                            <img src={section.img} className={styles.eachSection}/>
                            <p>{section.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
  )
}

export default Sections