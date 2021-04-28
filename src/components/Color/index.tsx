import { ColorBackground, GeneralButton } from '@components'
import styles from './styles.module.scss'

function Color() {
  return (
    <div className={styles._container}>
      <div className={styles._imageContainer}>
        <ColorBackground color="#3772ff" />
      </div>
      <div className={styles._descriptionMobileContainer}>
        <p className={styles._description}>Este tono, amable y nada agresivo a la vista, es “un potenciador de armonía, serenidad y creatividad” según los psicólogos, y que muy pronto podremos ver presente en todo tipo de disciplinas, desde moda, arte y diseño, hasta hogar y tecnología.</p>
      </div>
      <div className={styles._contentContainer}>
        <div className={styles._optionsContainer}>
          <div className={styles._optionsContainer_children}>
            <div className={styles._colorTitle}>
              Blue
            </div>
            <div className={styles._colorOptions}>
              <div className={styles._colorOptions_row}>
                <div className={styles._lengthArea}>
                  <div style={{ width: '85%' }}>
                    <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                      Tamaño
                    </GeneralButton>
                  </div>
                </div>
                <div className={styles._calculatorArea}>
                  <div style={{ width: '100%' }}>
                    <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                      <img src="images/icons/calculator.svg" alt="search" width="16px" />
                    </GeneralButton>
                  </div>
                </div>
              </div>
              <p>Cantidad</p>
              <div className={styles._colorOptions_row}>
                <div className={styles._quantityArea}>
                  <div style={{ width: '40%', height: '100%' }}>
                    <input type="text" className={styles._inputQuantity} style={{ height: '50%', width: '100%' }} />
                  </div>
                  <div style={{ width: '60%', display: 'flex' }}>
                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ backgroundColor: '#FDCA40', width: 50, height: 50, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="_arrow _left"></i>
                      </div>
                    </div>
                    <div style={{ width: '50%', height: '100%' }}>
                      <div style={{ backgroundColor: '#FDCA40', width: 50, height: 50, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="_arrow _right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles._emptyArea}>
                  <GeneralButton backgroundColor="#262833" textColor="#FFFFFF">
                    .......
                  </GeneralButton>
                </div>
              </div>
            </div>
            <div className={styles._descriptionContainer}>
              <p className={styles._description}>Este tono, amable y nada agresivo a la vista, es “un potenciador de armonía, serenidad y creatividad” según los psicólogos, y que muy pronto podremos ver presente en todo tipo de disciplinas, desde moda, arte y diseño, hasta hogar y tecnología.</p>
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
