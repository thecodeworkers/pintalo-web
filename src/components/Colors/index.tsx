import { memo } from 'react'
import { GeneralButton } from '@components'
import { selectOption, selectPalette } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { palettes, colorsBlue } from '@utils/tmpPalettes'
import { Palette } from './elements'
import styles from './styles.module.scss'
import { filter } from '@utils'
import { buildPallete } from './functions'

const caterories = [
  'colorOfBrand',
  'makeColor'
]

const Colors = () => {
  const {
    palette: { currentType },
    colors: { category, brand, colorSelected }, product: { attributes: { colors, brands }, products }
  } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  const changeCategory = (index, type, element) => {
    const filterProducts = (type === 'colors') ? filter(products, element, 'slug', ['colors', 'nodes']) : buildPallete(products, type, element)
    if (category != caterories[index])
      dispatch(selectOption('category', caterories[index]))
    changePalette(type, filterProducts)

    if (index) dispatch(selectOption('brand', ''))
  }

  const changePalette = (type, elements) => {
    dispatch(selectPalette(type, elements))
  }

  return (
    <div className={styles._container}>
      <div className={styles._firstSection}>
        <div className={styles._titleContainer}>
          <p className={styles._title}>Imagina un color y encuéntralo aquí</p>
        </div>
        <div className={styles._paletteContainer}>
          {
            colors.map((color, index) => (
              <div
                className={`${styles._palette} ${styles._paletteTransition}`}
                key={index}
                onClick={() => {
                  changeCategory(1, 'colors', color.slug)
                  if (colorSelected != color.slug)
                    dispatch(selectOption('colorSelected', color.slug))
                }}
              >
                <style jsx>{`
                  .${styles._palette} {
                    background-color: #${color.slug};
                    width: calc(100% / ${colors.length + 2});
                    ${(category == caterories[1] && colorSelected == color.slug) ? (
                    `
                          transform: skew(-20deg) scale(1.1);
                          z-index: 20;
                        `
                  ) : ''
                  }
                  }

                  @media (max-width: 768px) {
                    .${styles._palette} {
                      width: 100%;
                      ${(category == caterories[1] && colorSelected == color.background) ? (
                    `transform: scale(1.1);`
                  ) : ''
                  }
                    }
                  }
                `}</style>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles._secondSection}>
        <p className={styles._subTitle}>¿Ya sabes con cuál color y marca vas a pintar? Búscalo aquí.</p>
        <div className={styles._bigButtonContainer}>
          <div className={styles._bigButton}>
            <GeneralButton
              backgroundColor={category == caterories[0] ? '#262833' : '#E6E8E6'}
              textColor={category == caterories[0] ? '#FFFFFF' : '#262833'}
              adjustWidth
              method={() => {
                changeCategory(0, 'palettes', palettes)
                dispatch(selectOption('brand', ''))
              }}
            >
              <p>Colores por marcas</p>
            </GeneralButton>
          </div>
          <div className={styles._bigButton}>
            <GeneralButton
              backgroundColor={category == caterories[1] ? '#262833' : '#E6E8E6'}
              textColor={category == caterories[1] ? '#FFFFFF' : '#262833'}
              adjustWidth
              method={() => {
                changeCategory(1, 'colors', colors[0]?.slug)
                if (colorSelected != colors[0]?.slug)
                  dispatch(selectOption('colorSelected', colors[0]?.slug))
              }}
            >
              <p>Crea tus colores</p>
            </GeneralButton>
          </div>
        </div>
        {
          (category == caterories[0] && currentType == 'palettes') && (
            <div className={styles._buttonsContainer}>
              {
                brands.map((type, index) => {
                  const name = type.name

                  return (
                    <div className={styles._button} key={index}>
                      <GeneralButton
                        backgroundColor={name == brand ? '#FDCA40' : '#262833'}
                        textColor={'#fff'}
                        large="2.2rem"
                        adjustWidth
                        method={() => {
                          changeCategory(0, 'palettes', type.slug)
                          dispatch(selectOption('brand', name))
                        }}
                      >
                        <p className={styles._buttonText}>{name}</p>
                      </GeneralButton>
                    </div>
                  )
                })
              }
            </div>
          )
        }
        {
          (brand || currentType == 'colors') && <Palette />
        }
      </div>
    </div>
  )
}

export default memo(Colors)
