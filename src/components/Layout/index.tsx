import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitForm } from '@store/actions'
import GeneralButton from '../GeneralButton'
import GeneralModal from '../GeneralModal'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Toast from '../Toast'
import styles from './styles.module.scss'

const Layout = ({ children }) => {
  const { showFooter, modal: { contact } } = useSelector((state: any) => state.intermitence)
  const [form, setForm] = useState({ name: '', lastname: '', email: '', message: '' })
  const dispatch = useDispatch()

  const setFieldForm = (name, field) => setForm((oldForm) => ({ ...oldForm, [name]: field }))

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
              <form className={styles._formContainer}>
                <div className={styles._inputContainerRow}>
                  <input placeholder='Nombre' value={form?.name} onChange={(event) => setFieldForm(event.currentTarget.name, event.currentTarget.value)} className={styles._inputRow} name='name' />
                  <input placeholder='Apellido' value={form?.lastname} onChange={(event) => setFieldForm(event.currentTarget.name, event.currentTarget.value)} className={styles._input} name='lastname' />
                </div>

                <div className={styles._inputContainerColumn}>
                  <input placeholder='Correo' value={form?.email} onChange={(event) => setFieldForm(event.currentTarget.name, event.currentTarget.value)} className={styles._input} name='email' />
                </div>

                <textarea placeholder='Descripción' value={form?.message} onChange={(event) => setFieldForm(event.currentTarget.name, event.currentTarget.value)} className={styles._textArea} name='message' />

                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} method={() => dispatch(submitForm(form))}>
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
