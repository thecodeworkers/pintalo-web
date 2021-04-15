import styles from './styles.module.scss'

const FirstBanner = ({ data }) => {
  return (
    <>
      <div className={`${styles._main} _image`}>
        <h1>{data?.title}</h1>
      </div>

      <style jsx>{`
      ._image {
        background-image: url(${data?.background?.mediaItemUrl});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width:100%;
        height: 30vw;
      }
    `}</style>
    </>
  )
}

export default FirstBanner
