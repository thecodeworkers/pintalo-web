import { useEffect, useState} from 'react'
import { BlackDropDown } from '@components'
import styles from './styles.module.scss'
import { formikBudgetInfo } from './formik'
import { useDispatch, useSelector } from 'react-redux'
import { elementId } from '@utils/common'
import { setFormRef } from '@store/actions'

const BudgetInformation = () => {

  const dispatch = useDispatch()
  const formik = formikBudgetInfo(dispatch, {})

  const checkout = useSelector((state: any) => state.checkout)

  const deliveryData = checkout?.address || {}

  const countries = ['Venezuela', 'Colombia', 'Argentina']
  const municipalities = ['Caracas', 'Bogota', 'Buenos Aires']
  const [currentCheckbox, setCurrentCheckbox] = useState(2)

  useEffect(() => {
    const id = elementId('#budget-form')
    dispatch(setFormRef({ reference: id }))
  }, [])

  const checkboxAction = (current: number) => {
    setCurrentCheckbox(current)
    if(current == 1) return fillFields()
    if(current == 2) return resetFields()
  }

  const fillFields = () => {
    for (const key in deliveryData) {
      formik.setFieldValue(key, deliveryData[key])
    }
  }

  const resetFields = () => {
    for (const key in deliveryData) {
      formik.setFieldValue(key, '')
    }
  }

  return (
    <form className={styles._formContainer} onSubmit={formik.handleSubmit} id='budget-form'>
      <h1 className={styles._selectionTitle}>Seleccione una opción</h1>
      <div className={styles._selectionContainer}>
        <div className={styles._optionContainerDisabled}>
          <div className={styles._checkboxContainer}>
            <input
              type="checkbox"
              className={styles._checkboxActive}
              onChange={() => checkboxAction(1)}
              checked={currentCheckbox == 1 ? true : false}
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
              onChange={() => checkboxAction(2)}
              checked={currentCheckbox == 2 ? true : false}
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
            className={formik.errors.name && formik.touched.name ? styles._inputError : styles._input}
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
            className={formik.errors.lastname && formik.touched.lastname ? styles._inputError : styles._input}
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
            className={formik.errors.phone && formik.touched.phone ? styles._inputError : styles._input}
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
          className={formik.errors.address && formik.touched.address ? styles._inputError : styles._input}
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
              items={countries}
            />
          </div>
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Ciudad">Ciudad</label>
          <input
            placeholder='Ciudad'
            className={formik.errors.city && formik.touched.city ? styles._inputError : styles._input}
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
            className={formik.errors.postalCode && formik.touched.postalCode ? styles._inputError : styles._input}
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
            className={formik.errors.referencePoint && formik.touched.referencePoint ? styles._inputError : styles._input}
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
              items={municipalities}
              specialAlign
              showValue
            />
          </div>
        </div>
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
      { !formik.isValid && formik.submitCount > 0 && <p className={styles._errorMsg}>Ha ocurrido un error, verifica que todos los campos esten llenos</p> }

    </form>
  )
}

export default BudgetInformation
