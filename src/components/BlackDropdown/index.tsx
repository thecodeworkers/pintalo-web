import { memo, useState } from 'react'
import styles from './styles.module.scss'

const BlackDropDown = ({
  height,
  items = [],
  title,
  specialAlign = false,
  showValue = false,
  valueShow = null,
  onSet = null,
  method = null,
  returnValue = null,
  hideWhenPick = true
}) => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const setNewValue = (value) => {
    setValue(value)
    if (returnValue) returnValue(value)
    if (onSet) onSet(value)
  }

  const showOptions = (event: any) => {
    event.preventDefault()
    if (!method) setShow(show => !show)
    if (method) method()
  }

  return (
    <>
      <div className={styles._dropdown}>
        <button
          className={styles._dropbtn}
          onClick={showOptions}
        >
          {value || title}
          {showValue && <span className={styles._test}>{valueShow ? valueShow : '$0.00'}</span>}
          <i className={`${styles._arrow} _down`}></i>
        </button>
        <div className={styles._dropdown_content}>
          {
            items.map((item, index) => (
              <p key={index} onClick={() => {
                setNewValue(item.label || item.name || item)
                setShow(show => !show)
              }}>{item.label || item.name || item}</p>
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
