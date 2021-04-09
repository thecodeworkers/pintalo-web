import { useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton, HalfBanner } from '@components'
import { passwordRegex, emailRegex } from '@utils/regex'
import { setFooterShow } from '@store/actions'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

const LoginView = () => {

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(setFooterShow({showFooter: false}))
    return () => { dispatch(setFooterShow({showFooter: true})) }
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

  const navigation = () => router.push('/register')

  return (
    <section className={styles._main}>
      <HalfBanner url='images/banner/banner-withoutborder.png' />

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
                <GeneralButton backgroundColor='#FDCA40' textColor='#262833' text='Ingresar' large bold type='submit' />
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


