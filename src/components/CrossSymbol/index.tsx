import styles from './styles.module.scss'

const CrossSymbol = ({ height = '18px', width = '2px' }) => (
  <>
    <div className={styles._lineOne}>
      <div className={styles._lineTwo}></div>
    </div>
    <style jsx>{`
      .${styles._lineOne} {
        height: ${height};
        width: ${width};
      }
      .${styles._lineTwo} {
        height: ${height};
        width: ${width};
      }
    `}</style>
  </>
)

export default CrossSymbol
