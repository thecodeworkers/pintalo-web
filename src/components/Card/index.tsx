import styles from './styles.module.scss';

const Card = ({ list = true }) => (
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
                <p className={styles._title}>Pineco Prestige</p>
                <p className={styles._parragraph}> Descripción</p>
                <p className={styles._parragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aut labore nihil eligendi voluptate. Laborum, vero consequatur. Cupiditate architecto iste natus obcaecati cum rerum illum, sapiente saepe exercitationem suscipit molestiae?</p>
              </>
            )
        }

      </div>
      <div className={styles._imgParent}>
        <img src='images/banner/portrait.png' alt='portrait' width='50%'></img>
      </div>
    </div>
  </div>
)

export default Card
