import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalClose } from '@store/actions'
import { GeneralModalProps } from './types'
import styles from './styles.module.scss'

const white= '#ffffff'

const GeneralModal: FC<GeneralModalProps> = ({ children, width, title }) => {
  const { showModal } = useSelector((state: any) => state.intermitence)
  const dispatch = useDispatch()

  return (
    <>
      {showModal ? (
        <div className={styles._modalContainer} onClick={() => dispatch(modalClose(false))}>
          <div className={'_container'} onClick={e => e.stopPropagation()}>
            <div className={styles._header}>
              <p className={styles._title}>{title}</p>
              <img src='images/icons/close.svg' className={styles._closeIcon} onClick={() => dispatch(modalClose(false))} />
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
}

export default GeneralModal
