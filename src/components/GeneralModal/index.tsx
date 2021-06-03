import { FC, memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { showModal } from '@store/actions'
import { GeneralModalProps } from './types'
import styles from './styles.module.scss'

const GeneralModal: FC<GeneralModalProps> = ({ children, title, className = '' }) => {
  const dispatch = useDispatch()

  const closeOnScapeKeyDown = e => {
    if ((e.charCode || e.keyCode) == 27) dispatch(showModal('', false))
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnScapeKeyDown)
    return () => { document.body.removeEventListener('keydown', closeOnScapeKeyDown) }
  }, [])

  return (
    <div className={styles._modalContainer} onClick={() => dispatch(showModal('', false))}>
      <div className={`${styles._container} ${className}`} onClick={e => e.stopPropagation()}>
        <div className={styles._header}>
          <p className={styles._title}>{title}</p>
          <img src='/images/icons/close.svg' className={styles._closeIcon} onClick={() => dispatch(showModal('', false))} />
        </div>
        <div className={styles._body}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(GeneralModal)
