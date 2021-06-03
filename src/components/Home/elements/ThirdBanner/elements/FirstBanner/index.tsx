import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const FirstBanner = ({ data }) => {
  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  const allies = data?.patners || []

  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._alliesContainer}>
            <div className={styles._contentAllies}>
              {
                allies.map((res, index) => {
                  return (
                    <div className={styles._alliesImageContainer} key={index}>
                      <div className={styles._allies}>
                        <img className={styles._allie} src={res?.image?.mediaItemUrl}></img>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={styles._aboutBackground}>
            <div className={styles._aboutContainer}>
              <div className={styles._content}>
                <div className={styles._titleContainer}>
                  <p className={styles.title}>{data?.title}</p>
                </div>

                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} method={() => navigation('/about-us')}>
                    <p className={styles._buttonText}>{data?.button?.text}</p>
                  </GeneralButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .${styles._aboutBackground} {
          background-image: url(${data?.background?.mediaItemUrl});
        }
      `}</style>
    </>
  )
}

export default FirstBanner
