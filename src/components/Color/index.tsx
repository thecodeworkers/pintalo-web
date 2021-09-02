import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addedItem, showModal } from '@store/actions'
import { Calculator } from './elements'
import {
  ColorBackground,
  CounterButton,
  GeneralButton,
  BlackDropDown,
  GeneralModal
} from '@components'
import styles from './styles.module.scss'
import { createMarkup } from '@utils'
import { useRouter } from 'next/router'

const Color = ({ detail }) => {
  const [retina, setRetina] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [variation, setVariaton] = useState({})
  const dispatch = useDispatch()
  const router = useRouter()

  const setFirstVariation = () => {
    let data = {}
    if (detail?.attributes?.nodes) {
      for (let attr of detail?.attributes?.nodes) {
        data[attr.slug] = attr.options[0]
      }
      setVariaton(data)
    }
  }

  useEffect(() => {
    setFirstVariation()
  }, [detail?.attributes?.nodes])

  const { modal: { calculator } } = useSelector((state: any) => state.intermitence)

  const createCart = () => dispatch(addedItem(detail, quantity, variation))
  const setVar = (value) => setVariaton((oldVar) => ({ ...oldVar, pa_presentations: value }))

  return (
    <>
      <div className={styles._container}>
        <div className={styles._imageContainer}>
          <ColorBackground color={`#${detail.slug}`} />
        </div>
        <div className={styles._descriptionMobileContainer} dangerouslySetInnerHTML={createMarkup(detail?.description)}>
        </div>
        <div className={styles._contentContainer}>
          <div className={styles._optionsContainer}>
            <div className={styles._optionsContainer_children}>
              <div className={styles._colorTitle}>
                {detail.name}
              </div>
              <div className={styles._colorOptions}>
                <div className={styles._colorOptions_row}>
                  <div className={styles._lengthArea}>
                    <div className={styles._lengthSelect}>
                      <BlackDropDown
                        height={retina ? '3.3rem' : '2.5rem'}
                        items={detail?.attributes?.nodes?.filter((att) => att.name.toLowerCase() === "presentaciones")[0]?.options}
                        title="Tamaño"
                        onSet={setVar}
                      />
                    </div>
                  </div>
                  <div className={styles._calculatorMobileArea}>
                    <div className={styles._calculatorButton}>
                      <GeneralButton
                        backgroundColor="#262833"
                        textColor="#FFFFFF"
                        large={retina ? '3.3rem' : '2.5rem'}
                        method={() => dispatch(showModal('calculator', true))}
                        adjustWidth
                      >
                        <img src="/images/icons/calculator.svg" alt="calculator" width="16px" />
                      </GeneralButton>
                    </div>
                  </div>
                </div>
                <p className={styles._quantityTitle}>Cantidad</p>
                <div className={styles._colorOptions_row}>
                  <div className={styles._quantityArea}>
                    <div className={styles._quantityInputContainer}>
                      <input type="text" className={`${styles._inputQuantity} _inputSize`} value={quantity} disabled />
                    </div>
                    <div className={styles._arrowContainer}>
                      <div className={styles._arrowContainer_left}>
                        <CounterButton direction="_left" size={retina ? '3.3rem' : '2.5rem'} onPress={(minus: number) => {
                          setQuantity(quantity => {
                            if (quantity > 1) return quantity + minus
                            return quantity
                          })
                        }} />
                      </div>
                      <div className={styles._arrowContainer_right}>
                        <CounterButton direction="_right" size={retina ? '3.3rem' : '2.5rem'} onPress={(plus: number) => {
                          setQuantity(quantity => {
                            if (quantity < detail.stockQuantity) return quantity + plus
                            return quantity
                          })
                        }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles._calculatorArea}>
                    <div className={styles._calculatorButton}>
                      <GeneralButton
                        backgroundColor="#262833"
                        textColor="#FFFFFF"
                        large={retina ? '3.3rem' : '2.5rem'}
                        adjustWidth
                        method={() => dispatch(showModal('calculator', true))}
                      >
                        <img src="/images/icons/calculator.svg" alt="calculator" width="16px" />
                      </GeneralButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles._descriptionContainer} dangerouslySetInnerHTML={createMarkup(detail?.description)}>
              </div>
            </div>
          </div>
          <div className={styles._buttonContainer}>
            <div className={styles._buttonBox}>
              <GeneralButton
                backgroundColor="#262833"
                textColor="#FFFFFF"
                adjustWidth
                large={retina ? '3.3rem' : '2.5rem'}
                method={createCart}
              >
                Añadir al carrito
              </GeneralButton>
            </div>
          </div>
        </div>
        <div className={styles._backButton} onClick={() => router.back()}>
          Volver
        </div>
      </div>

      {
        calculator ? (
          <GeneralModal title="Calculadora" className={styles._modalBody}>
            <div className={styles._modalHeight}>
              <Calculator buttonHeight={retina ? '2.8rem' : '2rem'} />
            </div>
          </GeneralModal>
        ) : null
      }

      <style jsx>{`
        ._inputSize {
          height: ${retina ? '3.3rem' : '2.5rem'};
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Color
