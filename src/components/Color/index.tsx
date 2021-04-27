import { ColorBackground, GeneralButton } from '@components'
import styles from './styles.module.scss'

function Color() {
  return (
    <div className={styles._container}>
      <div className={styles._imageContainer}>
        <ColorBackground color="#3772ff" />
      </div>
      <div className={styles._descriptionMobileContainer}>
        <p>Este tono, amable y nada agresivo a la vista, es “un potenciador de armonía, serenidad y creatividad” según los psicólogos, y que muy pronto podremos ver presente en todo tipo de disciplinas, desde moda, arte y diseño, hasta hogar y tecnología.</p>
      </div>
      <div className={styles._contentContainer}>
        <div style={{ height: '80%', backgroundColor: 'purple', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: '45%', backgroundColor: 'red', width: '100%' }}>
            <div style={{ fontSize: 80, marginBottom: 10 }}>
              Blue
            </div>
            <div style={{ display: 'flex', marginBottom: 30, backgroundColor: 'green' }}>
              <div style={{ backgroundColor: 'blue', marginRight: 30, width: '60%' }}>
                <div style={{ marginBottom: 12 }}>
                  <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                    Añadir al carrito
                  </GeneralButton>
                </div>
                <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                  Añadir al carrito
                </GeneralButton>
              </div>
              <div style={{ width: '30%' }}>
                <div style={{ marginBottom: 12 }}>
                  <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                    <img src="images/icons/calculator.svg" alt="search" width="16px" />
                  </GeneralButton>
                </div>
                <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                  .......
                </GeneralButton>
              </div>
            </div>
            <div className={styles._descriptionContainer}>
              <p>Este tono, amable y nada agresivo a la vista, es “un potenciador de armonía, serenidad y creatividad” según los psicólogos, y que muy pronto podremos ver presente en todo tipo de disciplinas, desde moda, arte y diseño, hasta hogar y tecnología.</p>
            </div>
          </div>
        </div>
        <div className={styles._buttonContainer}>
          <div className={styles._buttonBox}>
            <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
              Añadir al carrito
            </GeneralButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Color
