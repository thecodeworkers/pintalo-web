import styles from './styles.module.scss'

const ActivityIndicator = () => (
  <>
    <div className={styles._lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
)

export default ActivityIndicator
