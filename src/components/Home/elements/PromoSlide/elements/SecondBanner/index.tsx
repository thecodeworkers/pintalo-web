import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'

const SecondBanner = () => {

  const router = useRouter()
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  const secondBanner = home?.secondBanner?.secondBanner

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={'_sliderBackground'}>
        <div className={'_main'}>
          <div className={styles._container}>

            <div className={styles._titleContainer}>
              <p className={styles._title}>{secondBanner?.title}</p>
            </div>
            <div className={styles._subtitleContainer}>
              <p className={styles._subtitle}>{secondBanner?.subtitle}</p>
            </div>

            <div className={styles._buttonContainer}>
              <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
                bold={false} text={secondBanner?.button?.text}
                method={() => navigation('/shop')} large={true} />
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        ._sliderBackground{
          background-image: url(${secondBanner?.background?.mediaItemUrl});
           background-repeat: no-repeat;
           background-size: 100% 100%;
           width:100%;
           height: 100vh;
        }
      `}</style>
    </>
  )
}

export default SecondBanner
