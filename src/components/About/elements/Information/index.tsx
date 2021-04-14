import styles from './styles.module.scss'
import { createMarkup } from '@utils'

const Information = ({ data }) => {
    console.log(data)
    return (
    <>
      <section className={styles._infoContainer}>
          <div className={styles._leftContainer}>
              <h2>{data.leftTitle}</h2>
              <div dangerouslySetInnerHTML={createMarkup(data?.leftDescription)}></div>
          </div>
          <div className={styles._rightContainer}>
                <h2>{data.rightTitle}</h2>
              <div dangerouslySetInnerHTML={createMarkup(data?.rightDescription)}></div>
          </div>
      </section>
    </>
  )
}

export default Information
