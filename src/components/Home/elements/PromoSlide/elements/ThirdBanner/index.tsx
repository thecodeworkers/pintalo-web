import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const ThirdBanner = () => {

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={'_sliderBackground'}>
        <div className={'_main'}>
          <div className={styles._container}>

            <div className={styles._titleContainer}>
              <p className={styles._title}>Consigue todo lo necesario para pintar tus espacios.</p>
            </div>
            <div className={styles._subtitleContainer}>
              <p className={styles._subtitle}>Reviste, recubre y remodela con las mejores
                herramientas y los precios más bajos.</p>
            </div>

            <div className={styles._buttonContainer}>
              <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                bold={false} text={'Ir a shop'}
                method={() => navigation('/shop')} large={true} />
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        ._sliderBackground{
           background-image: url(./images/slider3.png);
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
