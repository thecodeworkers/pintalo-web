import styles from './styles.module.scss'
import { GeneralButton, InputPassword } from '@components'
import { formikConfig } from './formik'
import { useDispatch, useSelector } from 'react-redux'

const ResetPassword = () => {
  const {
    intermitence: { showLoader },
    user: { isAuth }
  } = useSelector((state: any) => state)

  const formik = formikConfig()
  const { errors, touched } = formik

  return (
    <section className={styles._main}>

      <div className={styles._rightSection}>
        <div className={styles._formParent}>
          <div className={styles._header}>
            <p>Recuperar contraseña</p>
          </div>

          <div className={styles._content}>

            <form className={styles._form} onSubmit={formik.handleSubmit}>
                <label>Nueva contraseña</label>
                <InputPassword
                  formik={formik}
                  name="password"
                  placeholder="Contraseña"
                />

                <label>Repetir nueva contraseña</label>
                <InputPassword
                  formik={formik}
                  name="confirmPassword"
                  placeholder="Confirmar Contraseña"
                />

              <div className={styles._joinUsParent}>
                <p className={styles._advice}>Importante</p>
                <p className={styles._pattern}>Debe contener min 8 caracteres</p>
                <p className={styles._pattern}>Debe tener símbolos y numeros</p>
              </div>

              <div className={styles._parentBtn} >
                <GeneralButton backgroundColor='#FDCA40' textColor='#262833'
                  bold type='submit' adjustWidth showLoader={showLoader}>
                  Recuperar
                </GeneralButton>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResetPassword
