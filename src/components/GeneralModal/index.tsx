import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalClose } from '@store/actions'
import { GeneralModalProps } from './types'
import styles from './styles.module.scss'

const GeneralModal: FC<GeneralModalProps> = ({ children, title, className = '' }) => {
  const showModal = useSelector((state: any) => state.intermitence.showModal)
  const dispatch = useDispatch()

  return (
    <>
      {showModal ? (
        <div className={styles._modalContainer} onClick={() => dispatch(modalClose(false))}>
          <div className={`${styles._container} ${className}`} onClick={e => e.stopPropagation()}>
            <div className={styles._header}>
              <p className={styles._title}>{title}</p>
              <img src='/images/icons/close.svg' className={styles._closeIcon} onClick={() => dispatch(modalClose(false))} />
            </div>
            <div className={styles._body}>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default GeneralModal
