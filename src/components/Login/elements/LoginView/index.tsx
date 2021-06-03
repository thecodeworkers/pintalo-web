import { useEffect } from 'react'
import { modalClose, setFooterShow } from '@store/actions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { formikForLogin, formikForPasswordReset } from './formik'
import {
  GeneralButton,
  HalfBanner,
  RedirectPage,
  GeneralModal
} from '@components'
import styles from './styles.module.scss'

const LoginView = ({ data }) => {
  const {
    intermitence: { showFooter, showLoader },
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
  }, [isAuth])

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

                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Contraseña'
                        className={formik.errors.password && formik.touched.password ? styles._inputError : styles._input}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />

                      <p className={styles._forgot} onClick={() => dispatch(modalClose(true))}>¿Olvidaste tu contraseña? <a> Recuperar Contraseña </a></p>

                      <div className={styles._parentBtn} >
                        <GeneralButton backgroundColor='#FDCA40' textColor='#262833' large="2.2rem" bold type='submit' showLoader={showLoader}>
                          Ingresar
                        </GeneralButton>
                      </div>

                      <p className={styles._forgot}>¿No estás registrado? <a onClick={navigation}> Registrate </a></p>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <GeneralModal title={'Recuperar contraseña'} className={styles._modalBody}>
              <div className={styles._content}>
                <form className={styles._form} onSubmit={formik2.handleSubmit}>
                  <label htmlFor="password">Correo electrónico</label>
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

                  {/* <label htmlFor="confirmPassword">Repetir nueva contraseña</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className={formik2.errors.confirmPassword && formik2.touched.confirmPassword ? styles._inputError : styles._input}
                    onChange={formik2.handleChange}
                    onBlur={formik2.handleBlur}
                    value={formik2.values.confirmPassword}
                  />

                  <div className={styles._info}>
                    <p>Importante</p>
                    <p>Debe contener min 8 caracteres</p>
                    <p>Debe tener símbolos y numeros</p>
                  </div> */}

                  <div className={styles._parentBtn}>
                    <GeneralButton backgroundColor='#FDCA40' textColor='#262833' large="2.2rem" bold type='submit' showLoader={showLoader}>
                      Recuperar
                    </GeneralButton>
                  </div>
                </form>
              </div>
            </GeneralModal>
          </>
        )
      }
    </>
  )
}

export default LoginView
