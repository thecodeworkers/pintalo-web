import styles from './styles.module.scss';
import { createMarkup } from '@utils'

const Card = ({ list = true, title = '', description = '', image = 'images/banner/portrait.png'}) => (
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
              <p className={styles._title}>José Farias</p>
              <div className={styles._personalInfo}>
                <ul className={styles._list}>
                  <li> Pintor </li>
                  <li> C.I 26.690.801 </li>
                  <li> Desde 2006 </li>
                </ul>
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
