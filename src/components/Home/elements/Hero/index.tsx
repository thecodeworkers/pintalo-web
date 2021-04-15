import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const Hero = ({ data }) => {

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
              <p className={styles._subtitle}>{data?.slogan}</p>
            </div>
            <p className={styles._title}>{data?.title}</p>
            <div className={styles._buttonContainer}>
              <div className={styles._content}>
                <p className={styles._buttonTitle}>{data?.firstButton?.title}</p>
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                  bold={false} text={data?.firstButton?.button?.text}
                  method={() => navigation('/colors')} large={true} />
              </div>
              <div className={styles._content}>
                <p className={styles._buttonTitle}>{data?.secondButton?.title}</p>
                <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
                  bold={false} text={data?.secondButton?.button?.text}
                  method={() => navigation('/colors')} large={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'_rollerBackground'}></div>
      <style jsx>{`
    ._rollerBackground{
        background-image: url(${data?.background?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: cover;
        width:100%;
        height: 50vh;
    }
  `}</style>
    </>
  )
}

export default Hero
