import { BlackDropDown } from '@components'
import styles from './styles.module.scss'
import { formikBudgetInfo } from './formik'
import { useDispatch, useSelector } from 'react-redux'

const BudgetInformation = () => {

  const dispatch = useDispatch()
  const formik = formikBudgetInfo(dispatch)

  const state = useSelector((state: any) => state.checkout)

  console.log('CHECKOOOOOOOUT', state)

  return (
    <form className={styles._formContainer} onSubmit={formik.handleSubmit}>
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
          <input
            placeholder='Nombre'
            className={styles._input}
            name='name'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Apellido">Apellido</label>
          <input
            placeholder='Apellido'
            className={styles._input}
            name='lastname'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Telefono">Telefono</label>
          <input
            placeholder='Telefono'
            className={styles._input}
            name='phone'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            />
        </div>
      </div>
      <div className={styles._largeInputContainerRow}>
        <label htmlFor="Direccion">Dirección (zona/urbanización, calle, casa/edificio)</label>
        <input
          placeholder='Dirección'
          className={styles._input}
          name='address'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          />
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
          <input
            placeholder='Ciudad'
            className={styles._input}
            name='city'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Codigo Postal">Código Postal</label>
          <input
            placeholder='Código Postal'
            className={styles._input}
            name='postalCode'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postalCode}
            />
        </div>
      </div>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Punto de referencia">Punto de referencia</label>
          <input
            placeholder='Punto de referencia'
            className={styles._input}
            name='referencePoint'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.referencePoint}
            />
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

      <button type='submit'> click!</button>
    </form>
  )
}

export default BudgetInformation
