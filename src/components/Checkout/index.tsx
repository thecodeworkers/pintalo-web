import { useEffect } from 'react'
import { GeneralButton } from '@components'
import { setFooterShow } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { LeftSection } from './elements'
import styles from './styles.module.scss'

const Checkout = () => {
  const {
    intermitence: { showFooter }
  } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    if(showFooter) dispatch(setFooterShow(false))
    return () => { dispatch(setFooterShow(true)) }
  }, [])

  return (
    <div className={styles._container}>
      <div className={styles._leftContainer}>
        <LeftSection />
      </div>

      <div className={styles._rightContainer}>
        <div className={styles._paymentSteps}>
          <div className={styles._paymentSteps_content}>
            <div className={styles._formContent}>
              <div className={styles._paymentSteps_header}>
                <p>Tus datos</p>
              </div>

              <form className={styles._formContainer}>
                <div className={styles._inputContainerRow}>
                  <div className={styles._formItem}>
                    <label htmlFor="Nombre">Nombre</label>
                    <input placeholder='Nombre' className={styles._input} />
                  </div>
                  <div className={styles._formItem}>
                    <label htmlFor="Apellido">Apellido</label>
                    <input placeholder='Apellido' className={styles._input} />
                  </div>
                </div>
                <div className={styles._inputContainerRow}>
                  <div className={styles._formItem}>
                    <label htmlFor="Cédula">Cédula</label>
                    <input placeholder='Cédula' className={styles._input} />
                  </div>
                  <div className={styles._formItem}>
                    <label htmlFor="Teléfono">Teléfono</label>
                    <input placeholder='Teléfono' className={styles._input} />
                  </div>
                </div>
                <div className={styles._largeInputContainerRow}>
                  <label htmlFor="Email">E-mail</label>
                  <input placeholder='Email' className={styles._input} />
                </div>
                <p className={styles._caption}><strong>Importante:</strong> Confirma que todos los datos esten correctos antes de continuar. </p>
              </form>
            </div>
            <div className={styles._formButtonContainer}>
              <GeneralButton
                backgroundColor="#FDCA40"
                textColor="#262833"
              >
                Siguiente
              </GeneralButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
