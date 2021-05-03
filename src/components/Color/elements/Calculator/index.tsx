import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const Calculator = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', width: '100%', height: 600 }}>
    <div style={{ height: '25%', backgroundColor: 'rebeccapurple' }}>
      <p>¿Cuánta pintura necesito?</p>
    </div>
    <div style={{ height: '25%', backgroundColor: 'red' }}>
      <p>Indica tus medidas</p>

    </div>
    <div style={{ height: '25%', backgroundColor: 'royalblue', display: 'flex', flexDirection: 'column' }}>
      <p style={{ height: '20%' }}>Área que vas a pintar</p>
      <div style={{ backgroundColor: 'pink', height: '80%', display: 'flex' }}>
        <div style={{ width: '50%', backgroundColor: 'yellow' }}>
          <p>Longitud</p>
          <input type="text" placeholder="0" /> <span>m</span>
        </div>
        <div style={{ width: '50%', backgroundColor: 'yellowGreen' }}>
          <p>Altura</p>
          <input type="text" placeholder="0" /> <span>m</span>
        </div>
      </div>
    </div>
    <div style={{ height: '25%', backgroundColor: 'saddlebrown', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'  }}>
      <div>
        <GeneralButton backgroundColor="#FDCA40" textColor="#262833">
          Calcular el resultado
        </GeneralButton>
      </div>
    </div>
  </div>
)

export default Calculator
