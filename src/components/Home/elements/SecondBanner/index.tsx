import { useState } from "react";
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
      <div className={'_rollerBackground'}>
        <div className={'_main'}>
          <div className={styles._container}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>Mejores productos, mejores precios.</p>
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

export default SecondBanner
