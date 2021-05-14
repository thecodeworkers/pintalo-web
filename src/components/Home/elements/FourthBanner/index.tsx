import styles from './styles.module.scss'

const FourthBanner = ({ data }) => {
  return (
    <>
      <div className={styles._background}>
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
        .${styles._background} {
          background-image: url(${data?.background?.mediaItemUrl});
        }
      `}</style>
    </>
  )
}

export default FourthBanner
