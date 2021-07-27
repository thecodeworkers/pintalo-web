import { BlackDropDown } from '@components'
import styles from './styles.module.scss'

const BudgetInformation = () => {
  return (
    <form className={styles._formContainer}>
      <h1 className={styles._selectionTitle}>Seleccione una opción</h1>
      <div className={styles._selectionContainer}>
        <div className={styles._optionContainerDisabled}>
          <div className={styles._checkboxContainer}>
            <input
              type="checkbox"
              className={styles._checkboxActive}
              onChange={() => {}}
              checked={false}
            />
          </div>
          <div className={styles._textContainer}>
            <p>Utilizar los mismos datos de delivery</p>
          </div>
        </div>

        <div className={styles._optionContainer}>
          <div className={styles._checkboxContainer}>
            <input
              type="checkbox"
              className={styles._checkboxActive}
              onChange={() => {}}
              checked={true}
            />
          </div>
          <div className={styles._textContainer}>
            <p>Ingresar otros datos</p>
          </div>
        </div>
      </div>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Nombre">Nombre</label>
          <input placeholder='Nombre' className={styles._input} />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Apellido">Apellido</label>
          <input placeholder='Apellido' className={styles._input} />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Telefono">Telefono</label>
          <input placeholder='Telefono' className={styles._input} />
        </div>
      </div>
      <div className={styles._largeInputContainerRow}>
        <label htmlFor="Direccion">Dirección (zona/urbanización, calle, casa/edificio)</label>
        <input placeholder='Dirección' className={styles._input} />
      </div>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Pais">País</label>
          <div className={styles._dropDownSeparation}>
            <BlackDropDown
              height="2.5rem"
              title="Seleccione país"
              specialAlign
            />
          </div>
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Ciudad">Ciudad</label>
          <input placeholder='Ciudad' className={styles._input} />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Codigo Postal">Código Postal</label>
          <input placeholder='Código Postal' className={styles._input} />
        </div>
      </div>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Punto de referencia">Punto de referencia</label>
          <input placeholder='Punto de referencia' className={styles._input} />
        </div>
        <div className={styles._formLargeItem}>
          <label htmlFor="Municipio">Municipio</label>
          <div className={styles._dropDownSeparation}>
            <BlackDropDown
              height="2.5rem"
              title="Chacao"
              specialAlign
              showValue
            />
          </div>
        </div>
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
    </form>
  )
}

export default BudgetInformation
