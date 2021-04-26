import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
const FirstBanner = () => {

  const router = useRouter()
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  const firstBanner = home?.secondBanner?.firstBanner


  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={'_rollerBackground'}>
        <div className={'_main'}>
          <div className={styles._container}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>{firstBanner?.title}</p>
            </div>

            <div className={styles._emptyContainer}></div>

            <div className={styles.lastContainer}>
              <div className={styles._subtitleContainer}>
                <p className={styles._subtitle}>{firstBanner?.subtitle}</p>
              </div>
              <div className={styles._textContainer}>
                <p className={styles._text}>{firstBanner?.text}</p>

              </div>
              <div className={styles._buttonContainer}>
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                  bold={false} text={firstBanner?.button.text}
                  method={() => navigation('/shop')} large={false} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        ._rollerBackground{
           background-image: url(${firstBanner?.background?.mediaItemUrl});
           background-repeat: no-repeat;
           background-size: 100% 100%;
           width:100%;
           height: 100vh;
        }
      `}</style>
    </>
  )
}

export default FirstBanner
