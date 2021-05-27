import { useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton, HalfBanner } from '@components'
import { passwordRegex, emailRegex } from '@utils/regex'
import { setFooterShow } from '@store/actions'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

const LoginView = ({ data }) => {

  const { showFooter } = useSelector((state: any) => state.intermitence)

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if(showFooter) dispatch(setFooterShow(false))
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required(),
        // .matches(emailRegex),

      password: Yup.string()
        .min(8)
        .required()
        // .matches(passwordRegex),
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  const navigation = () => {
    // dispatch(setFooterShow({ showFooter: false }))
    router.push('/register')
  }

  return (
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
                className={styles._input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              <input
                id="password"
                name="password"
                type="password"
                placeholder='Contraseña'
                className={styles._input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              <p className={styles._forgot}>¿Olvidaste tu contraseña? <a> Recuperar Contraseña </a></p>

              <div className={styles._parentBtn} >
                <GeneralButton backgroundColor='#FDCA40' textColor='#262833' large="2.2rem" bold type='submit'>
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

export default LoginView
