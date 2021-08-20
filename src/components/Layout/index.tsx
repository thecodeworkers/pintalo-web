import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitForm } from '@store/actions'
import GeneralButton from '../GeneralButton'
import GeneralModal from '../GeneralModal'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Toast from '../Toast'
import styles from './styles.module.scss'
import { formikContact } from './formik'

const Layout = ({ children }) => {
  const { showFooter, modal: { contact }, showLoader } = useSelector((state: any) => state.intermitence)
  const dispatch = useDispatch()
  const formik = formikContact(dispatch)

  return (
    <>
      <Navbar />
      {children}
      {showFooter && <Footer />}
      <Toast />
      {
        contact ? (
          <GeneralModal title={'Contacto'} className={styles._modalBody}>
            <div className={styles._body}>
              <form className={styles._formContainer} onSubmit={formik.handleSubmit}>
                <div className={styles._inputContainerRow}>
                  <input placeholder='Nombre' onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={formik.errors.name && formik.touched.name ? styles._inputErrorRow : styles._inputRow}
                    name='name' />
                  <input placeholder='Apellido' onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname} className={formik.errors.lastname && formik.touched.lastname ? styles._inputError : styles._input} name='lastname' />
                </div>

                <div className={styles._inputContainerColumn}>
                  <input placeholder='Correo'  onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}  className={formik.errors.email && formik.touched.email ? styles._inputError : styles._input} name='email' />
                </div>

                <textarea placeholder='Descripción' onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message} className={styles._textArea}   name='message' />

                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} type='submit' showLoader={showLoader}>
                    Enviar
                  </GeneralButton>
                </div>
              </form>
            </div>
          </GeneralModal>
        ) : null
      }
    </>
  )
}

export default memo(Layout)
