import { useEffect, useState } from 'react'
import { isRetina } from '@utils'
import { CounterButton } from './elements'
import ColorBackground from '../ColorBackground'
import GeneralButton from '../GeneralButton'
import styles from './styles.module.scss'

const Color = () => {
  const [retina, setRetina] = useState(false)

  useEffect(() => {
    if (isRetina()) setRetina(true)
  }, [])

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
                  <div className={styles._lengthSelect}>
                    <GeneralButton backgroundColor="#262833" textColor="#FFFFFF" large={retina ? '3.3rem' : '2.5rem'}>
                      Tamaño
                    </GeneralButton>
                  </div>
                </div>
                <div className={styles._calculatorArea}>
                  <div className={styles._calculatorButton}>
                    <GeneralButton backgroundColor="#262833" textColor="#FFFFFF" large={retina ? '3.3rem' : '2.5rem'}>
                      <img src="images/icons/calculator.svg" alt="search" width="16px" />
                    </GeneralButton>
                  </div>
                </div>
              </div>
              <p className={styles._quantityTitle}>Cantidad</p>
              <div className={styles._colorOptions_row}>
                <div className={styles._quantityArea}>
                  <div className={styles._quantityInputContainer}>
                    <input type="text" className={styles._inputQuantity} />
                  </div>
                  <div className={styles._arrowContainer}>
                    <div className={styles._arrowContainer_left}>
                      <CounterButton direction="_left" />
                    </div>
                    <div className={styles._arrowContainer_right}>
                      <CounterButton direction="_right" />
                    </div>
                  </div>
                </div>
                <div className={styles._emptyArea}>
                  {/* <GeneralButton backgroundColor="#262833" textColor="#FFFFFF" large={retina ? '3.3rem' : '2.5rem'}>
                    .......
                  </GeneralButton> */}
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
