import { FC } from 'react'
import { GeneralButton } from '@components'
import { SizeInput } from './elements'
import { CalculatorProps } from './types'
import styles from './styles.module.scss'

const Calculator: FC<CalculatorProps> = ({ buttonHeight }) => (
  <>
    <div className={styles._container}>
      <div className={styles._titleContainer}>
        <p className={styles._title}>¿Cuánta pintura necesito?</p>
      </div>
      <div className={styles._sizeContainer}>
        <div className={styles._sizeContainer_title}>
          <p className={styles._subTitle}>Indica tus medidas</p>
        </div>
        <div className={`${styles._sizeContainer_options} _height`}>
          <div className={styles._metersButton}>
            <p className={styles._sizeTitle}>Metros</p>
          </div>
          <div className={styles._centimeterButton}>
            <p className={styles._sizeTitle}>Centímetros</p>
          </div>
        </div>
      </div>
      <div className={styles._areaContainer}>
        <div className={styles._areaContainer_title}>
          <p className={styles._title}>Área que vas a pintar</p>
        </div>
        <div className={styles._areaContainer_options}>
          <SizeInput title="Longitud" height={buttonHeight} />
          <SizeInput title="Altura" height={buttonHeight} align={styles._moveBox} />
        </div>
      </div>
      <div className={styles._buttonContainer}>
        <div className={styles._buttonSubContainer}>
          <GeneralButton backgroundColor="#FDCA40" textColor="#262833" large={buttonHeight}>
            Calcular el resultado
          </GeneralButton>
        </div>
      </div>
    </div>

    <style jsx>{`
      ._height {
        height: ${buttonHeight}
      }
    `}</style>
  </>
)

export default Calculator
