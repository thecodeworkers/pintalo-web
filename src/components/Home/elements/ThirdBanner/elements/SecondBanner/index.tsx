import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const ThirdBanner = ({ data }) => {
  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  return (
    <>
      <div className={styles._main}>
        <div className={styles._endContainer}>
          <div className={styles._leftContainer}>
            <div className={styles._avatarBackground} />
            <div className={styles._leftDownContainerMobile}>
              <p className={styles._leftTitle}>{data?.lowTitle}</p>
              <div className={styles._buttonContainer}>
                <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={true} method={() => navigation('/painters')}>
                  <p className={styles._buttonText}>{data?.lowButton?.text}</p>
                </GeneralButton>
              </div>
            </div>
            <div className={styles._leftDownContainer}>
              <div className={styles._leftDownContent}>
                <div className={styles._leftDownTextContainer}>
                  <p className={styles._leftTitle}>{data?.lowTitle}</p>
                  <p className={styles._leftSubtitle}>{data?.lowSubtitle}</p>
                </div>
              </div>
              <div className={styles._rightDownContainer}>
                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={true} method={() => navigation('/painters')}>
                    {data?.lowButton?.text}
                  </GeneralButton>
                </div>
              </div>
            </div>
          </div>
          <div className={styles._rigthContainer}>
            <div className={styles._inspoBackground} >
              <div className={styles._modal}>
                <div className={styles._modalHeader} />
                <div className={styles._modalBody}>
                  <p className={styles._modalTitle}>{data?.title}</p>
                  <p className={styles._modalSubtitle}>{data?.subtitle}</p>
                  <div className={styles._buttonContainer}>
                    <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={false} method={() => navigation('/inspo')}>
                      <p className={styles._buttonText}>{data?.button.text}</p>
                    </GeneralButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .${styles._inspoBackground} {
          background-image: url(${data?.background?.mediaItemUrl});
        }
        .${styles._avatarBackground} {
          background-image: url(${data?.portrait?.mediaItemUrl});
        }
      `}</style>
    </>
  )
}

export default ThirdBanner
