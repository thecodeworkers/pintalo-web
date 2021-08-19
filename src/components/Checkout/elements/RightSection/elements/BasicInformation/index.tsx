import styles from './styles.module.scss'
import { formikBasicData } from './formik'
import { useDispatch } from 'react-redux'

const BasicInformation = () => {

  const dispatch = useDispatch()
  const formik = formikBasicData(dispatch)

  return (
    <form className={styles._formContainer}>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Nombre">Nombre</label>
          <input placeholder='Nombre' className={styles._input} />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Apellido">Apellido</label>
          <input placeholder='Apellido' className={styles._input} />
        </div>
      </div>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Cédula">Cédula</label>
          <input placeholder='Cédula' className={styles._input} />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Teléfono">Teléfono</label>
          <input placeholder='Teléfono' className={styles._input} />
        </div>
      </div>
      <div className={styles._largeInputContainerRow}>
        <label htmlFor="Email">E-mail</label>
        <input placeholder='Email' className={styles._input} />
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
    </form>
  )
}

export default BasicInformation
