import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { BlackDropDown } from '@components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFormRef, updateShipping } from '@store/actions'
import { formikAddresInfo } from './formik'
import { parseDate, parseHour, buildSimpleArray, elementId } from '@utils/common'

const AddressInformation = () => {

  const dispatch = useDispatch()
  const { checkout: { address, countries },
    cart: { cart } } = useSelector((state: any) => state)

  const [inputType, setInputType] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [hour, setHour] = useState(new Date())
  const [showHour, setShowHour] = useState(false)
  const [country, setCountry] = useState(address?.country ?? '')
  const [city, setCity] = useState(address?.city ?? '')
  const [municipality, setMunicipality] = useState(address?.municipality ?? '')
  const [localCountries] = useState(buildSimpleArray(countries?.nodes, 'title') ?? [])
  const [localCities, setLocalCities] = useState([])
  const [localTownships, setLocalTownships] = useState([])
  const [amount, setAmount] = useState(0.00)

  const data: any = {
    date: parseDate(startDate),
    hour: parseHour(hour),
    country,
    municipality
  }

  const formik = formikAddresInfo(dispatch, data, address)
  const openDate = () => setInputType((oldType: boolean) => !oldType)
  const openHour = () => setShowHour((oldShow: boolean) => !oldShow)

  useEffect(() => {
    const id = elementId('#address-form')
    dispatch(setFormRef({ reference: id }))
  }, [])

  const countryAction = (newCountry) => {
    setCountry(newCountry)
    const result = countries?.nodes?.find((element: any) => element?.title == newCountry)
    if (result) {
      const townships = result?.cities?.nodes
      setLocalCities(townships)
      setCity('')
      setMunicipality('')
    }
  }

  const cityAction = (newCity) => {
    setCity(newCity)
    const result = localCities.find((element: any) => element?.name == newCity)
    if (result) {
      const townships = buildSimpleArray(result?.townships?.content, 'name')
      setLocalTownships(townships)
      setMunicipality('')
    }
  }

  const municipalityAction = (newMun) => {
    setMunicipality(newMun)
    const rate = cart?.availableShippingMethods[0]?.rates?.find(item => item.label?.toLowerCase().replace(' ', '_') === newMun.toLowerCase().replace(' ', '_'))
    setAmount(rate?.cost)
    dispatch(updateShipping(rate?.id))
  }

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
              title={!country ? 'Seleccione país' : country}
              specialAlign
              items={localCountries ?? []}
              returnValue={(country) => countryAction(country)}
            />
          </div>
        </div>
        <div className={styles._formItem}>
          <label htmlFor="Ciudad">Ciudad</label>
          <div className={styles._dropDownSeparation}>
            <BlackDropDown
              height="2.5rem"
              title={!city ? 'Seleccione ciudad' : city}
              specialAlign
              items={buildSimpleArray(localCities, 'name') ?? []}
              returnValue={(city) => cityAction(city)}
            />
          </div>
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
              title={!municipality ? 'Seleccione municipio' : municipality}
              specialAlign
              showValue
              valueShow={amount}
              items={localTownships ?? []}
              returnValue={(municipality) => municipalityAction(municipality)}
            />
          </div>
        </div>
      </div>
      <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
      {!formik.isValid && formik.submitCount > 0 && <p className={styles._errorMsg}>Ha ocurrido un error, verifica que todos los campos esten llenos</p>}
    </form>
  )
}

export default AddressInformation
