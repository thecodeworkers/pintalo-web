import styles from './styles.module.scss';
import { createMarkup } from '@utils'

const Card = ({ list = true, title = '', description = '', image = 'images/banner/portrait.png', painter = null }) => (
  <div className={styles._card}>
    <div className={styles._info}>

      <div className={styles._header}>
        <div className={styles._dotsParent}>
          <div className={styles._dot}></div>
          <div className={styles._dot}></div>
          <div className={styles._dot}></div>
        </div>
      </div>
      <div className={styles._infoParent}>

        {
          list ?
            (<>
              <p className={styles._title}>{ painter?.name }</p>
              <div className={styles._personalInfo}>
                <div dangerouslySetInnerHTML={createMarkup(painter?.personalInformation)} className={styles._listParent}>
                </div>
                <p> Contáctalo </p>
              </div>
            </>)
            : (
              <>
                <p className={styles._title}>{title}</p>
                <div className={styles._parragraph} dangerouslySetInnerHTML={createMarkup(description)}></div>
              </>
            )
        }

      </div>
      <div className={styles._imgParent}>
        <img src={image} alt='portrait' width='50%'></img>
      </div>
    </div>
  </div>
)

export default Card
