import { useState } from 'react'
import styles from './styles.module.scss'

const InputPassword = ({ formik, name, placeholder }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={styles._inputPasswordContainer}>
      <input
        id={name}
        name={name}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        className={formik.errors[name] && formik.touched[name] ? styles._inputError : styles._input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />

      <div className={styles._imageParent} onClick={() => setShow(show => !show)}>
        <img src={show ? 'images/icons/hide-password.svg' : 'images/icons/show-password.svg'}  width='18px' height='18px' />
      </div>
    </div>
  )
}

export default InputPassword
