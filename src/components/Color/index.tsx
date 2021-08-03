import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addedItem, setItem, showModal } from '@store/actions'
import { Calculator } from './elements'
import {
  ColorBackground,
  CounterButton,
  GeneralButton,
  BlackDropDown,
  GeneralModal
} from '@components'
import styles from './styles.module.scss'

const sizes = [
  {
    label: '6 L'
  },
  {
    label: '3 L'
  },
  {
    label: '1.5 L'
  }
]

const Color = ({ detail }) => {
  const [retina, setRetina] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const { items } = useSelector((state: any) => state.cart)

  const { modal: { calculator } } = useSelector((state: any) => state.intermitence)

  const createCart = () => {
    detail['quantitySelected'] = quantity
    let itemToCart = []

    const currentIndex = items.findIndex(item => item.id == detail.id)

    if (currentIndex > -1) {
      items[currentIndex]['quantitySelected'] = quantity
      itemToCart = items
    } else {
      itemToCart = [
        ...items,
        ...[detail]
      ]
    }

    dispatch(setItem(itemToCart))
    dispatch(addedItem())
  }

  return (
    <>
      <div className={styles._container}>
        <div className={styles._imageContainer}>
          <ColorBackground color={`#${detail.slug}`} />
        </div>
        <div className={styles._descriptionMobileContainer}>
          <p className={styles._description}>Este tono, amable y nada agresivo a la vista, es “un potenciador de armonía, serenidad y creatividad” según los psicólogos, y que muy pronto podremos ver presente en todo tipo de disciplinas, desde moda, arte y diseño, hasta hogar y tecnología.</p>
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
                        items={detail?.attributes?.nodes?.filter((att)=> att.name === "Presentaciones")[0].options}
                        title="Tamaño"
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
              <div className={styles._descriptionContainer}>
                <p className={styles._description}>Este tono, amable y nada agresivo a la vista, es “un potenciador de armonía, serenidad y creatividad” según los psicólogos, y que muy pronto podremos ver presente en todo tipo de disciplinas, desde moda, arte y diseño, hasta hogar y tecnología.</p>
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
