import { useEffect } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { passwordRegex, emailRegex } from '@utils/constants'
import { setFooterShow } from '@store/actions'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const LoginView = () => {

  const dispatch = useDispatch()

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

  return (
    <section className={styles._main}>
      <div className={styles._leftSection}>
        <img src='images/banner/banner-withoutborder.png' alt='login-banner' width='100%' height='100%'></img>
      </div>

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

              <p className={styles._forgot}>¿No estás registrado? <a> Registrate </a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginView


