import { useEffect } from 'react'
import { GeneralButton } from '@components'
import { setFooterShow } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { LeftSection, RightSection } from './elements'
import styles from './styles.module.scss'

const Checkout = () => {

  const {
    intermitence: { showFooter }
  } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    if(showFooter) dispatch(setFooterShow(false))
    return () => { dispatch(setFooterShow(true)) }
  }, [])

  return (
    <>
      <div className={styles._container}>
        <div className={styles._leftContainer}>
          <LeftSection />
        </div>

        <div className={styles._rightContainer}>
          <RightSection />
        </div>

      <div className={styles._buttonMobileContainer}>
        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
          adjustWidth
        >
          Siguiente
        </GeneralButton>

        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
          adjustWidth
        >
          Volver al carrito
        </GeneralButton>
      </div>
      </div>
    </>
  )
}

export default Checkout
