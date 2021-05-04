import React, { FC } from 'react'
import styles from './styles.module.scss'
import { SizeInputProps } from './types'

export const SizeInput: FC<SizeInputProps> = ({ title, align = null, height, unit }) => {
  return (
    <>
      <div className={`${styles._inputContainer} ${align}`}>
        <div className={styles._inputSubContainer}>
          <p className={`${styles._subTitle} ${styles._labelSeparation}`}>{title}</p>
          <div className={styles._inputBox}>
            <input type="text" className={`${styles._input} _height`} placeholder="0" />
            <span className={styles._unitBox}>{unit}</span>
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
