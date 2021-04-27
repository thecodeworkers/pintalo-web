import styles from './styles.module.scss'

const FourthBanner = ({ data }) => {

  return (
    <>
    <div className={'_background'}>
      <div className={'_main'}>

        <div className={styles._container}>
          <div className={styles._titleContainer}>
          <p className={styles._title}>{data?.title}</p>
          </div>
          <div className={styles._subtitleContainer}>
          <p className={styles._subtitle}>{data?.content}</p>
          </div>
        </div>
      </div>
      </div>
      <style jsx>{`
    ._background{
        background-image: url(${data?.background?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height: 25vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  `}</style>
    </>
  )
}

export default FourthBanner
