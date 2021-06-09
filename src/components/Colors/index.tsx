import { GeneralButton } from '@components'
import { Palete } from './elements'
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

const type = [
  { name: 'Pineco' },
  { name: 'VP' },
  { name: 'Manpica' },
  { name: 'Butler tools' },
  { name: 'Alpha' },
  { name: 'Reinco' },
  { name: 'Cebra' }
]

const Colors = () => (
  <div className={styles._container}>
    <div className={styles._firstSection}>
      <p className={styles._title}>Imagina un color y encuéntralo aquí</p>
      <div className={styles._paleteContainer}>
        {
          colors.map((color, index) => (
            <div className={`${styles._palete} ${styles._paleteTransition}`} key={index}>
              <style jsx>{`
                .${styles._palete} {
                  background-color: ${color.background};
                  width: calc(100% / ${colors.length + 2});
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
          <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} large="2.2rem" adjustWidth>
            Colores por marcas
          </GeneralButton>
        </div>
        <div className={styles._bigButton}>
          <GeneralButton backgroundColor={'#E6E8E6'} textColor={'#262833'} bold={false} large="2.2rem" adjustWidth>
            Crea tus colores
          </GeneralButton>
        </div>
      </div>
      <div className={styles._buttonsContainer}>
        {
          type.map((res, index) => {
            return (
              <div className={styles._button} key={index}>
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} large="2.2rem" adjustWidth>
                  <p className={styles._buttonText}>{res.name}</p>
                </GeneralButton>
              </div>
            )
          })
        }
      </div>
      <Palete />
    </div>
  </div>
)

export default Colors
