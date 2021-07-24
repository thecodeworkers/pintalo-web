import { memo, useState } from 'react'
import styles from './styles.module.scss'

const BlackDropDown = ({
  height,
  items = [],
  title,
  specialAlign = false,
  showValue = false
}) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles._dropdown}>
        <button
          className={styles._dropbtn}
          onClick={(event) => {
            event.preventDefault()
            setShow(show => !show)
          }}
        >
          {title}
          {showValue && <span className={styles._test}>$0.00</span>}
          <i className={`${styles._arrow} _down`}></i>
        </button>
        <div className={styles._dropdown_content}>
          {
            items.map((item, index) => (
              <a key={index} href="#">{item.label}</a>
            ))
          }
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
        .${styles._dropbtn} {
          ${specialAlign ? `
            text-align: left;
            padding-left: 1rem;
          `: ''}
        }
      `}</style>
    </>
  )
}

export default memo(BlackDropDown)
