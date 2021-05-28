import { useEffect } from 'react'
import { GeneralButton, HalfBanner } from '@components'
import { setFooterShow } from '@store/actions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import RedirectPage from '../../../RedirectPage'
import styles from './styles.module.scss'
import formikConfig from './formik'

const LoginView = ({ data }) => {
  const {
    intermitence: { showFooter, showLoader },
    user: { isAuth }
  } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const router = useRouter()

  const formik = formikConfig(dispatch)
  const { errors, touched } = formik

  useEffect(() => {
    if(showFooter) dispatch(setFooterShow(false))
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
                      className={errors.email && touched.email ? styles._inputError : styles._input}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />

                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder='Contraseña'
                      className={errors.password && touched.password ? styles._inputError : styles._input}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />

                    <p className={styles._forgot}>¿Olvidaste tu contraseña? <a> Recuperar Contraseña </a></p>

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
        )
      }
    </>
  )
}

export default LoginView
