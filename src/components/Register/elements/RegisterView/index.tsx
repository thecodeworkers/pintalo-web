import { useEffect } from 'react'
import styles from './styles.module.scss'
import { HalfBanner, GeneralButton } from '@components'
import { setFooterShow } from '@store/actions'
import { useDispatch } from 'react-redux'
import { formikConfig } from './formik'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'


const RegisterView = ({ data }) => {

  const { showFooter } = useSelector((state: any) => state.intermitence)
  const formik = formikConfig()
  const dispatch = useDispatch()
  const router = useRouter()
  const { errors, touched } = formik

  useEffect(() => {
    if(showFooter) dispatch(setFooterShow({ showFooter: false }))
  }, [showFooter])

  useEffect(() => {
    return () => { dispatch(setFooterShow({ showFooter: true })) }
  }, [])

  const navigation = () => {
    router.push('/login')
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
                id="name"
                name="name"
                type="text"
                placeholder='Nombre'
                className={errors.name && touched.name ? styles._inputError : styles._input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />

              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder='Apellido'
                className={errors.lastname && touched.lastname ? styles._inputError : styles._input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />

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

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder='Confirmar Contraseña'
                className={errors.confirmPassword && touched.confirmPassword ? styles._inputError : styles._input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />

              <div className={styles._joinUsParent}>
                <p className={styles._joinUs}>Únete a nosotros. Descubre las mejores paletas para tus proyectos </p>
              </div>

              <div className={styles._parentBtn} >
                <GeneralButton backgroundColor='#FDCA40' textColor='#262833' text='Registrarse' large bold type='submit' />
              </div>
              <p className={styles._forgot}>¿No estás registrado? <a onClick={navigation}> Iniciar Sesión </a></p>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterView
