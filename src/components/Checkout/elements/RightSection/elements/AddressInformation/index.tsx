import { useState, useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import { BlackDropDown } from '@components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux'
import { elementId } from '@utils/common'
import { setFormRef } from '@store/actions'
import { formikAddresInfo } from './formik'

const countries = ['Venezuela', 'Colombia', 'Argentina']
const cities = ['Caracas', 'Bogota', 'Buenos Aires']

const AddressInformation = () => {


  const parseDate = (currentDate) => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const day = currentDate.getDate()

    return `${day}/${month}/${year}`
  }

  const parseHour = (data) => {
    const date = new Date(data)
    let minutes = date.getMinutes()
    let hour = date.getHours()
    hour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    hour = hour < 10 ? `0${hour}` : hour
    minutes = minutes < 10 ? `0${minutes}` : minutes
    const afternoon = date.getHours() > 11 ? 'PM' : 'AM'
    return `${hour}:${minutes} ${afternoon}`
  }

  const dispatch = useDispatch()
  const [inputType, setInputType] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [hour, setHour] = useState(new Date())
  const [showHour, setShowHour] = useState(false)

  const data: any = {
    date: parseDate(startDate),
    hour: parseHour(hour),
    country: 'Venezuela',
    municipality: 'Chacao'
  }

  const formik = formikAddresInfo(dispatch, data)
  const openDate = () => setInputType((inputType: boolean) => !inputType)
  const openHour = () => setShowHour((showHour: boolean) => !showHour)


  useEffect(() => {
    const id = elementId('#address-form')
    dispatch(setFormRef({ reference: id }))
  }, [])

  return (
    <form className={styles._formContainer} id='address-form' onSubmit={formik.handleSubmit}>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>

          <div className={styles._dropParent}>
            <BlackDropDown
              height="2.5rem"
              method={openDate}
              title={parseDate(startDate)}
            />
            {
              inputType
              &&
              <div className={styles._calendarParent}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  inline
                />
              </div>
            }
          </div>

        </div>
        <div className={styles._formItem}>
          <div className={styles._dropParent}>
            <BlackDropDown
              height="2.5rem"
              title={parseHour(hour)}
              method={openHour}
              specialAlign
            />

            {
              showHour &&
              <div className={styles._hoursParent}>
                <DatePicker
                  onChange={(date) => setHour(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption='Time'
                  dateFormat="h:mm aa"
                  inline
                />
              </div>
            }

          </div>
        </div>
        <div className={styles._formItem}>

        </div>
      </div>
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
        <div className={styles._formItem}>
          <label htmlFor="Telefono">Telefono</label>
          <input
            placeholder='Telefono'
            className={formik.errors.phone && formik.touched.phone ? styles._inputError : styles._input}
            name='phone'
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
              items={cities}
            />
          </div>
        </div>
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
    </form>
  )
}

export default AddressInformation
