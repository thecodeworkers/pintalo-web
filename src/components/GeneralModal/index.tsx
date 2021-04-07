import styles from './styles.module.scss'

const GeneralModal = ({ show, onClose, children, width, title }) => {

  const white= '#ffffff'

  const handleCloseClick = () => {
    onClose(true)
  };

  return (
    <>
      {show ? (
        <div className={styles._modalContainer}>
          <div className={'_container'}>
            <div className={styles._header}>
              <p className={styles._title}>{title}</p>
              <img src='images/icons/close.svg' className={styles._closeIcon} onClick={() => handleCloseClick()} />
            </div>
            <div className={styles._body}>
              {children}
            </div>
          </div>
        </div>
      ) : null}

<style jsx>{`
    ._container{
      background: ${white};
      width: ${width};
      border-radius: 10px;
      padding: 0 0 2rem 0;
    }
  `}</style>
    </>
  )
};

export default GeneralModal
