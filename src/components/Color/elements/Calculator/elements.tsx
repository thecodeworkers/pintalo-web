import React from 'react'
import styles from './styles.module.scss'

export const SizeInput = ({ title, align = null, height }) => {
  return (
    <>
      <div className={`${styles._inputContainer} ${align}`}>
        <div className={styles._inputSubContainer}>
          <p className={`${styles._subTitle} ${styles._labelSeparation}`}>{title}</p>
          <div className={styles._inputBox}>
            <input type="text" className={`${styles._input} _height`} placeholder="0" />
            <span className={styles._unitBox}>m</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        ._height {
          height: ${height}
        }
      `}</style>
    </>
  )
}
