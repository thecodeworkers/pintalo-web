import styles from './styles.module.scss'


const RedirectPage = () => (
  <div className="_main">
    <div className={styles._content}>
      <div className={styles._spinnerContainer}>
        <div className={styles._spinner} >
          <div className={styles._bounce1}></div>
          <div className={styles._bounce2}></div>
          <div className={styles._bounce3}></div>
        </div>
        <p className={styles._title}>Redirecting...</p>
      </div>
    </div>
  </div>
)

export default RedirectPage
