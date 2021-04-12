import { useRouter } from 'next/router'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const ThirdBanner = ({ data }) => {

  const router = useRouter()

  const navigation = (route) => {
    if (router.pathname != route) router.push(route)
  }

  const allies = data?.firstBanner?.patners

  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._alliesContainer}>
            <div className={styles._contentAllies}>
              {
                allies.map((res, index) => {
                  return (

                    <div className={styles._allies} key={index} >
                       <img className={styles._allie} src={res?.image?.mediaItemUrl}></img>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={'_aboutBackground'}>
            <div className={styles._aboutContainer}>
              <div className={styles._content}>
                <div className={styles._titleContainer}>
                  <p className={styles.title}>{data?.firstBanner?.title}</p>
                </div>

                <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#FDCA40'} textColor={'#262833'} bold={true} text={data?.firstBanner?.button?.text} method={() => navigation('/about-us')} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles._endContainer}>
          <div className={styles._leftContainer}>
            <div className={'_avatarBackground'} />
            <div className={styles._leftDownContainer}>
              <div className={styles._leftDownContent}>
                <div className={styles._leftDownTextContainer}>
                <p className={styles._leftTitle}>{data?.secondBanner?.lowTitle}</p>
                <p className={styles._leftSubtitle}>{data?.secondBanner?.lowSubtitle}</p>
                </div>

              </div>
              <div className={styles._rightDownContainer}>
              <div className={styles._buttonContainer}>
                  <GeneralButton backgroundColor={'#262833'} textColor={'#fff'} bold={true} text={data?.secondBanner?.lowButton?.text} method={() => navigation('/about-us')} />
                </div>
              </div>


            </div>
          </div>
          <div className={styles._rigthContainer}>
            <div className={'_inspoBackground'} />
          </div>

        </div>
      </div>

      <style jsx>{`
        ._aboutBackground{
           background-image: url(${data?.firstBanner?.background?.mediaItemUrl});
           background-repeat: no-repeat;
           background-size: 100% 100%;
           width:50%;
           height: 40vh;
        }
        ._inspoBackground{
          background-image: url(${data?.secondBanner?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 60vh;
       }
       ._avatarBackground{
        background-image: url(${data?.secondBanner?.portrait?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:35%;
        height: 35vh;
        margin: 0 auto
     }
      `}</style>
    </>
  )
}

export default ThirdBanner
