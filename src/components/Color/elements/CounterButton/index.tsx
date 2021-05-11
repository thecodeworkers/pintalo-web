import styles from './styles.module.scss'

const CounterButton = ({ direction, size }) => {
  return (
    <>
      <div className="_container">
        <i className={`${styles._arrow} ${direction}`}></i>
      </div>

      <style jsx>{`
        ._container {
          background-color: #FDCA40;
          width: ${size};
          height: ${size};
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default CounterButton
