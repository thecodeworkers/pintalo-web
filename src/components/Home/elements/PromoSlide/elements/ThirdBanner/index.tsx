import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'

const ThirdBanner = () => {

  const router = useRouter()
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  const thirdBanner = home?.secondBanner?.thirdBanner

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={'_sliderBackground'}>
        <div className={'_main'}>
          <div className={styles._container}>

            <div className={styles._titleContainer}>
              <p className={styles._title}>{thirdBanner?.title}</p>
            </div>
            <div className={styles._subtitleContainer}>
              <p className={styles._subtitle}>{thirdBanner?.subtitle}</p>
            </div>

            <div className={styles._buttonContainer}>
              <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                bold={false} text={thirdBanner?.button?.text}
                method={() => navigation('/shop')} large={true} />
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        ._sliderBackground{
          background-image: url(${thirdBanner?.background?.mediaItemUrl});
           background-repeat: no-repeat;
           background-size: 100% 100%;
           width:100%;
           height: 100vh;
        }
      `}</style>
    </>
  )
}

export default ThirdBanner
