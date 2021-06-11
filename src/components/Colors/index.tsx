import { memo } from 'react'
import { GeneralButton } from '@components'
import { selectOption, selectPalette } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { palettes, colorsBlue } from '@utils/tmpPalettes'
import { Palette } from './elements'
import styles from './styles.module.scss'

const colors: any = [
  { background: '#DF2935' },
  { background: '#FFB521' },
  { background: '#FFF700' },
  { background: '#3EFC3E' },
  { background: '#3CBC3C' },
  { background: '#3CBC99' },
  { background: '#7B8ECE' },
  { background: '#8D70A2' },
  { background: '#B7B7B7' },
  { background: '#C8B99C' }
]

const types = [
  { name: 'Pineco' },
  { name: 'VP' },
  { name: 'Manpica' },
  { name: 'Butler tools' },
  { name: 'Alpha' },
  { name: 'Reinco' },
  { name: 'Cebra' }
]

const caterories = [
  'colorOfBrand',
  'makeColor'
]

const Colors = () => {
  const {
    palette: { currentType },
    colors: { category, brand, colorSelected }
  } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  const changeCategory = (index, type, elements) => {
    if (category != caterories[index])
      dispatch(selectOption('category', caterories[index]))
      changePalette(type, elements)

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
                  changeCategory(1, 'colors', colorsBlue)
                  if (colorSelected != color.background)
                    dispatch(selectOption('colorSelected', color.background))
                }}
              >
                <style jsx>{`
                  .${styles._palette} {
                    background-color: ${color.background};
                    width: calc(100% / ${colors.length + 2});
                    ${
                      (category == caterories[1] && colorSelected == color.background) ? (
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
                      ${
                        (category == caterories[1] && colorSelected == color.background) ? (
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
              method={() => changeCategory(0, 'palettes', palettes)}
            >
              <p>Colores por marcas</p>
            </GeneralButton>
          </div>
          <div className={styles._bigButton}>
            <GeneralButton
              backgroundColor={category == caterories[1] ? '#262833' : '#E6E8E6'}
              textColor={category == caterories[1] ? '#FFFFFF' : '#262833'}
              adjustWidth
              method={() => changeCategory(1, 'colors', colorsBlue)}
            >
              <p>Crea tus colores</p>
            </GeneralButton>
          </div>
        </div>
        {
          (category == caterories[0] && currentType == 'palettes') && (
            <div className={styles._buttonsContainer}>
              {
                types.map((type, index) => {
                  const name = type.name

                  return (
                    <div className={styles._button} key={index}>
                      <GeneralButton
                        backgroundColor={name == brand ? '#FDCA40' : '#262833'}
                        textColor={'#fff'}
                        large="2.2rem"
                        adjustWidth
                        method={() => dispatch(selectOption('brand', name))}
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
