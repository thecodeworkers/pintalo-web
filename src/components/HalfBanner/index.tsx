import styles from './styles.module.scss'

const HalfBanner = ({ url }) => {
  return (
    <div className={styles._leftSection}>
      <img src={url} alt='login-banner' width='100%' height='100%'></img>
    </div>
  )
}

export default HalfBanner
