import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { showModal, setFooterShow } from '@store/actions'
import { formikForLogin, formikForPasswordReset } from './formik'
import {
  GeneralButton,
  HalfBanner,
  RedirectPage,
  GeneralModal,
  InputPassword
} from '@components'
import styles from './styles.module.scss'

const LoginView = ({ data }) => {
  const {
    intermitence: {
      showFooter,
      showLoader,
      modal: {
        sendEmail
      }
    },
    user: { isAuth }
  } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const router = useRouter()

  const formik = formikForLogin(dispatch)
  const formik2 = formikForPasswordReset(dispatch)

  useEffect(() => {
    if(showFooter) dispatch(setFooterShow(false))
    return () => { dispatch(setFooterShow(true)) }
  }, [])

  useEffect(() => {
    if (isAuth) router.push('/')
    if (!sendEmail) formik2.resetForm()

  }, [isAuth, sendEmail])

  const navigation = () => router.push('/register')

  return (
    <>
      {
        isAuth ? (
          <RedirectPage />
        ) : (
          <>
            <section className={styles._main}>
              <HalfBanner url={data?.image?.mediaItemUrl} />

              <div className={styles._rightSection}>
                <div className={styles._formParent}>
                  <div className={styles._header}>
                    <p>Ingresar</p>
                  </div>

                  <div className={styles._content}>
                    <h1>¡Hola! Descubre nuevas paletas</h1>

                    <form onSubmit={formik.handleSubmit}>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder='Correo'
                        className={formik.errors.email && formik.touched.email ? styles._inputError : styles._input}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />

                      <InputPassword
                        formik={formik}
                        name="password"
                        placeholder="Contraseña"
                      />

                      <p className={styles._forgot} onClick={() => dispatch(showModal('sendEmail', true))}>¿Olvidaste tu contraseña? <a> Recuperar Contraseña </a></p>

                      <div className={styles._parentBtn} >
                        <GeneralButton backgroundColor='#FDCA40' textColor='#262833' large="2.2rem" bold type='submit' showLoader={!sendEmail ? showLoader : false}>
                          Ingresar
                        </GeneralButton>
                      </div>

                      <p className={styles._forgot}>¿No estás registrado? <a onClick={navigation}> Registrate </a></p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {
              sendEmail ? (
                <GeneralModal title="" className={styles._modalBody}>
                  <div className={styles._content}>
                    <div className={styles._caption}>
                      <h1>Olvidó contraseña</h1>
                      <p>Ingrese la dirección de su correo electrónico.</p>
                      <p>Le enviaremos un enlace para restablecer su contraseña.</p>
                    </div>
                    <form className={styles._form} onSubmit={formik2.handleSubmit}>
                      <input
                        id="r-email"
                        name="email"
                        type="text"
                        className={formik2.errors.email && formik2.touched.email ? styles._inputError : styles._input}
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}
                        value={formik2.values.email}
                        placeholder="Correo"
                      />
                      <div className={styles._parentBtn}>
                        <GeneralButton backgroundColor='#FDCA40' textColor='#262833' large="2.2rem" bold type='submit' showLoader={showLoader}>
                          Recuperar
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
    </>
  )
}

export default LoginView
