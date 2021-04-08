import { useState } from "react";
import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const Hero = () => {

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={'_main'}>
        <div className={styles._heroContainer}>
          <div className={styles._container}>
            <div className={styles._subtitleContainer}>
              <p className={styles._subtitle}>reviste</p>
              <p className={styles._subtitle}>- recubre -</p>
              <p className={styles._subtitle}>remodela</p>
            </div>

            <p className={styles._title}>Píntalo con nosotros</p>
            <div className={styles._buttonContainer}>
              <div className={styles._content}>
                <p className={styles._buttonTitle}>¿Ya sabes qué quieres?</p>
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                  bold={false} text={'Elige tu color'}
                  method={() => navigation('/colors')} large={true} />
              </div>
              <div className={styles._content}>
                <p className={styles._buttonTitle}>¿No sabes por dónde comenzar?</p>
                <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
                  bold={false} text={'Explora las opciones'}
                  method={() => navigation('/colors')} large={true} />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={'_rollerBackground'}></div>
      <style jsx>{`
    ._rollerBackground{
        background-image: url(./images/roller.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height: 50vh;
    }
  `}</style>
    </>
  )
}

export default Hero
