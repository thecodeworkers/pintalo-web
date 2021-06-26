import styles from './styles.module.scss'

const CrossSymbol = ({ height = '18px', width = '2px', backgroundColor = '#262833' }) => (
  <>
    <div className={styles._lineOne}>
      <div className={styles._lineTwo}></div>
    </div>
    <style jsx>{`
      .${styles._lineOne} {
        height: ${height};
        width: ${width};
        background-color: ${backgroundColor}
      }
      .${styles._lineTwo} {
        height: ${height};
        width: ${width};
        background-color: ${backgroundColor}
      }
    `}</style>
  </>
)

export default CrossSymbol
