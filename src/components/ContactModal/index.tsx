import { useState, useEffect } from "react";
import styles from './styles.module.scss'
import ShortButton from '../ShortButton'

const Modal = ({ show, onClose }) => {


  const handleCloseClick = () => {
    onClose(true)
  };


  return (
    <>
      {show ? (
        <div className={styles._modalContainer}>
          <div className={styles._container}>
            <div className={styles._header}>
              <p className={styles._title}>Contacto</p>
              <img src='images/icons/close.svg' className={styles._closeIcon} onClick={() => handleCloseClick()} />
            </div>

            <div className={styles._body}>
              <form className={styles._formContainer}>
                <div className={styles._inputContainerRow}>
                  <input placeholder='Nombre' className={styles._input} />
                  <input placeholder='Cargo' className={styles._input} />
                </div>

                <div className={styles._inputContainerColumn}>
                  <input placeholder='Apellido' className={styles._input} />
                  <input placeholder='Correo' className={styles._input} />
                </div>

                <textarea placeholder='Descripción' className={styles._textArea} />

                <div className={styles._buttonContainer}>
                  <ShortButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} text={'Contácto'} method={() => handleCloseClick()} />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
};

export default Modal
