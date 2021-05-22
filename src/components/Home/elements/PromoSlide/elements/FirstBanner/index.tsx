import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const FirstBanner = () => {
  const router = useRouter()
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  const firstBanner = home?.secondBanner?.firstBanner

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={styles._rollerBackground}>
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
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={false} method={() => navigation('/shop')}>
                  <p className={styles._buttonText}>{firstBanner?.button.text}</p>
                </GeneralButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .${styles._rollerBackground} {
           background-image: url(${firstBanner?.background?.mediaItemUrl});
        }
      `}</style>
    </>
  )
}

export default FirstBanner
