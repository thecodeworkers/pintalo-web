import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, GeneralButton } from '@components'
import { selectPalette } from '@store/actions'
import { paintBackground } from './functions'
import { palettes } from '@utils/tmpPalettes'
import styles from './styles.module.scss'

const perPage = 16

const Palette = () => {
  const [page, setPage] = useState(1)

  const {
    currentElements,
    currentType
  } = useSelector((state: any) => state.palette)

  const dispatch = useDispatch()

  const changePalette = (type, elements) => {
    dispatch(selectPalette(type, elements))
  }

  return (
    <div className={styles._cardsContainer}>
      <div className={styles._cardsArea}>
        {
          currentElements.map((element, index) => {
            return (
              <div key={index} className={styles._card} onClick={() => {
                if (currentType == 'palettes') {
                  changePalette('colors', element.colors)
                }
              }}>
                <div className={styles._cartContainer}>
                  <img src="/images/icons/bx-cart.svg" alt={element.name} />
                </div>
                <p className={styles._paletteName}>{element.name}</p>

                <style jsx>{`
                  .${styles._card} {
                    ${paintBackground(currentType, element, element?.color)}
                  }
                `}</style>
              </div>
            )
          })
        }
      </div>
      <div className={styles._paginationContainer}>
        <GeneralButton
          backgroundColor={'#262833'}
          textColor={'#fff'}
          bold={false}
          method={() => {
            if (currentType == 'colors') {
              changePalette('palettes', palettes)
            }
          }}
        >
          Regresar
        </GeneralButton>
        {
          currentElements.length ? (
            <Pagination currentPage={page} items={currentElements} perPage={perPage} changePage={setPage}/>
          ) : null
        }
        <GeneralButton
          backgroundColor={'#262833'}
          textColor={'#fff'}
          bold={false}
        >
          Ir a shop
        </GeneralButton>
      </div>
    </div>
  )
}

export default Palette
