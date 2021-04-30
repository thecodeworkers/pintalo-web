import { memo, useState } from 'react'
import styles from './styles.module.scss'

const BlackDropDown = ({ height }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles._dropdown}>
        <button className={styles._dropbtn} onClick={() => setShow(!show)}>
          Tamaño<i className={`${styles._arrow} _down`}></i>
        </button>
        <div className={styles._dropdown_content}>
          <a className={styles._dropdown_items} href="#">6 L</a>
          <a className={styles._dropdown_items} href="#">3 L</a>
          <a className={`${styles._dropdown_items} ${styles._not_border}`} href="#">1.5 L</a>
        </div>
      </div>

      <style jsx>{`
        .${styles._dropdown_content} {
          display: ${show ? 'block' : 'none'};
        }
        .${styles._dropbtn} {
          height: ${height};
          ${!show ? `
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
          ` : ''}
        }
      `}</style>
    </>
  )
}

export default memo(BlackDropDown)
