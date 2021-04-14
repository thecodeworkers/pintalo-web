import styles from './styles.module.scss'
import { createMarkup } from '@utils'

const Information = ({ data }) => {
    return (
    <>
      <section className={styles._infoContainer}>
          <div className={styles._leftContainer}>
              <h2 className={styles._title}>{data.leftTitle}</h2>
              <div className={styles._description} dangerouslySetInnerHTML={createMarkup(data?.leftDescription)}></div>
          </div>
          <div className={styles._rightContainer}>
              <h2 className={styles._title}>{data.rightTitle}</h2>
              <div className={styles._description} dangerouslySetInnerHTML={createMarkup(data?.rightDescription)}></div>
          </div>
      </section>
    </>
  )
}

export default Information
