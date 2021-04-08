import styles from './styles.module.scss'
// import { Generalbutton } from '@components'

const LoginView = () => {
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

            <form>
              <input type="text" placeholder='Correo' className={styles._input} />
              <input type="password" placeholder='Contraseña' className={styles._input} />

              <p className={styles._forgot}>¿Olvidaste tu contraseña? <a> Recuperar Contraseña </a></p>


            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginView


