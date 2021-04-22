import { ColorBackground, GeneralButton } from '@components'
import styles from './styles.module.scss'

function Color() {
  return (
    <div className={styles._container}>
      <div className={styles._imageContainer}>
        <ColorBackground color="#3772ff" />
      </div>
      <div className={styles._contentContainer}>
        <div style={{ height: '80%', backgroundColor: 'purple' }}>

        </div>
        <div className={styles._buttonContainer}>
          <div className={styles._buttonBox}>
            <GeneralButton text="Añadir al carrito" backgroundColor="#262833" textColor="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Color
