import { useEffect, useRef  } from 'react'
import styles from './styles.module.scss'
import { formikBasicData } from './formik'
import { useDispatch } from 'react-redux'
import { setFormRef } from '@store/actions'
import { elementId } from '@utils/common'

const BasicInformation = () => {

  const dispatch = useDispatch()
  const formik = formikBasicData(dispatch)

  useEffect(() => {
    const id = elementId('#basic-form')
    dispatch(setFormRef({ reference: id }))
  }, [])

  return (
    <form className={styles._formContainer} onSubmit={formik.handleSubmit} id='basic-form'>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Nombre">Nombre</label>
          <input
            placeholder='Nombre'
            className={formik.errors.name && formik.touched.name ? styles._inputError : styles._input}
            name='name'
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
        </div>
      </div>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>
          <label htmlFor="Cédula">Cédula</label>
          <input
            placeholder='Cédula'
            className={formik.errors.document && formik.touched.document ? styles._inputError : styles._input}
            name='document'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.document}
          />
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Teléfono">Teléfono</label>
          <input
            placeholder='Teléfono'
            className={formik.errors.phone && formik.touched.phone ? styles._inputError : styles._input}
            name='phone'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            />
        </div>
      </div>
      <div className={styles._largeInputContainerRow}>
        <label htmlFor="Email">E-mail</label>
        <input
          placeholder='Email'
          className={formik.errors.email && formik.touched.email ? styles._inputError : styles._input}
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
      { !formik.isValid && formik.submitCount > 0 && <p className={styles._errorMsg}>Ha ocurrido un error, verifica que todos los campos esten llenos</p> }
    </form>
  )
}

export default BasicInformation
