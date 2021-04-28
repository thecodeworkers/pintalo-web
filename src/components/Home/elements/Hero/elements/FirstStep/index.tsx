import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '@store/actions'

const FirstStep = ({ data }) => {

  const router = useRouter()
  const dispatch = useDispatch()
  const slide = useSelector((state: any) => state)
  const currentStep = slide.setColor.step

  const setState = () => {
    dispatch(setColor({ category: 'aceite', step: currentStep + 1 }))
  }

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <div className={styles._subtitleContainer}>
          <p className={styles._subtitle}>{data?.slogan}</p>
        </div>
        <p className={styles._title}>{data?.title}</p>
        <div className={styles._buttonContainer}>
          <div className={styles._content}>
            <p className={styles._buttonTitle}>{data?.firstButton?.title}</p>
            <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} method={() => navigation('/colors')} large="2.2rem">
              {data?.firstButton?.button?.text}
            </GeneralButton>
          </div>
          <div className={styles._content}>
            <p className={styles._buttonTitle}>{data?.secondButton?.title}</p>
            <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={false} method={() => setState()} large="2.2rem">
              {data?.secondButton?.button?.text}
            </GeneralButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstStep
