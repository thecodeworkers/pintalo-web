import styles from './styles.module.scss'
import { BlackDropDown } from '@components'

const AddressInformation = () => {
  return (
    <form className={styles._formContainer}>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <BlackDropDown height="2.5rem" />
        </div>
        <div className={styles._formItem}>
          <BlackDropDown height="2.5rem" />
        </div>
        <div className={styles._formItem}>

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
            <BlackDropDown height="2.5rem" />
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
            <BlackDropDown height="2.5rem" />
          </div>
        </div>
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
    </form>
  )
}

export default AddressInformation
