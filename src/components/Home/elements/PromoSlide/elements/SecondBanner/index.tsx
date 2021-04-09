import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const SecondBanner = () => {

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
              <p className={styles._title}>No necesitas de un experto para saber cuánta pintura debes comprar.</p>
            </div>
            <div className={styles._subtitleContainer}>
              <p className={styles._subtitle}>Calcula con los m2 de tu espacio y pinta de colores tu vida.</p>
            </div>

            <div className={styles._buttonContainer}>
              <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
                bold={false} text={'Ir a shop'}
                method={() => navigation('/shop')} large={true} />
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        ._sliderBackground{
           background-image: url(./images/slider.png);
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
