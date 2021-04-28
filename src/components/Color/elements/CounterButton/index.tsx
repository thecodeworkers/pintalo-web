import styles from './styles.module.scss'

const CounterButton = ({ direction }) => {
  return (
    <div className={styles._container}>
      <i className={`${styles._arrow} ${direction}`}></i>
    </div>
  )
}

export default CounterButton
