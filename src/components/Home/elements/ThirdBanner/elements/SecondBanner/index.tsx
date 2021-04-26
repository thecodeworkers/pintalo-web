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
            <div className={'_avatarBackground'} />
            <div className={styles._leftDownContainer}>
              <div className={styles._leftDownContent}>
                <div className={styles._leftDownTextContainer}>
                  <p className={styles._leftTitle}>{data?.lowTitle}</p>
                  <p className={styles._leftSubtitle}>{data?.lowSubtitle}</p>
                </div>

              </div>
              <div className={styles._rightDownContainer}>
                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'}
                  bold={true} text={data?.lowButton?.text} method={() => navigation('/painters')} />
                </div>
              </div>

            </div>
          </div>
          <div className={styles._rigthContainer}>
            <div className={'_inspoBackground'} >
              <div className={styles._modal}>
                <div className={styles._modalHeader} />
                <div className={styles._modalBody}>
                  <p className={styles._modalTitle}>{data?.title}</p>
                  <p className={styles._modalSubtitle}>{data?.subtitle}</p>
                  <div className={styles._buttonContainer}>
                    <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'}
                      bold={false} text={data?.button.text}
                      method={() => navigation('/inspo')} large={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        ._inspoBackground{
          background-image: url(${data?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 100%;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
       }
       ._avatarBackground{
        background-image: url(${data?.portrait?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:30%;
        height: 30vh;
        margin: 0 auto
     }
      `}</style>
    </>
  )
}

export default ThirdBanner
