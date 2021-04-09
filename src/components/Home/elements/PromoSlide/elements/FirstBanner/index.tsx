import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const FirstBanner = () => {

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={'_rollerBackground'}>
        <div className={'_main'}>
          <div className={styles._container}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>Mejores productos, mejores precios.</p>
            </div>

            <div className={styles._emptyContainer}></div>

            <div className={styles.lastContainer}>
              <div className={styles._subtitleContainer}>
                <p className={styles._subtitle}>Conoce las ofertas que tenemos para ti.</p>
              </div>
              <div className={styles._textContainer}>
                <p className={styles._text}>Ingresa el código PINTALOTODO y obtén el 10% </p>
                <p className={styles._text}> en tu primera compra con nosotros.</p>
              </div>
              <div className={styles._buttonContainer}>
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                  bold={false} text={'Ir a shop'}
                  method={() => navigation('/shop')} large={false} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        ._rollerBackground{
           background-image: url(./images/banner.png);
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
