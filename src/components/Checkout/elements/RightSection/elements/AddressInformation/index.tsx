import { useState, useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import { BlackDropDown } from '@components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const countries = ['Venezuela', 'Colombia', 'Argentina']
const cities = ['Caracas', 'Bogota', 'Buenos Aires']

const AddressInformation = () => {

  const [inputType, setInputType] = useState(false)
  const [startDate, setStartDate] = useState(new Date());

  const openDate = () => setInputType((inputType: any) => !inputType)

  return (
    <form className={styles._formContainer}>
      <div className={styles._inputContainerRow}>
        <div className={styles._formItem}>

          <div className={styles._dropParent}>
            <BlackDropDown
              height="2.5rem"
              method={openDate}
              title={startDate.toDateString()}
            />

            {
              inputType
              &&
              <div className={styles._calendarParent}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline

                />
              </div>
            }
          </div>

        </div>
        <div className={styles._formItem}>
          <BlackDropDown
            height="2.5rem"
            title="00:00 PM"
            specialAlign
          />
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
