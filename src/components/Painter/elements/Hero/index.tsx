import styles from './styles.module.scss'

const FirstBanner = ({ data }) => {
  return (
    <>
      <div className={`${styles._main} ${styles._image}`}>
        <h1>{data?.title}</h1>
      </div>

      <style jsx>{`
        .${styles._image} {
          background-image: url(${data?.background?.mediaItemUrl});
        }
    `}</style>
    </>
  )
}

export default FirstBanner
