import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showModal } from '@store/actions'
import GeneralButton from '../GeneralButton'
import GeneralModal from '../GeneralModal'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Toast from '../Toast'
import styles from './styles.module.scss'

const Layout = ({ children }) => {
  const {
    showFooter,
    modal: { contact }
  } = useSelector((state: any) => state.intermitence)

  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      {children}
      { showFooter && <Footer /> }
      <Toast />
      {
        contact ? (
          <GeneralModal title={'Contacto'} className={styles._modalBody}>
            <div className={styles._body}>
              <form className={styles._formContainer}>
                <div className={styles._inputContainerRow}>
                  <input placeholder='Nombre' className={styles._inputRow} />
                  <input placeholder='Apellido' className={styles._input} />
                </div>

                <div className={styles._inputContainerColumn}>
                  <input placeholder='Correo' className={styles._input} />
                </div>

                <textarea placeholder='Descripción' className={styles._textArea} />

                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}  bold={true} method={() => dispatch(showModal('contact', false))}>
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
