import styles from './styles.module.scss'

const FirstBanner = () => {
  return (
    <>
      <div className={`${styles._main} _image`}>
        <h1>Pintores</h1>
      </div>

      <style jsx>{`
      ._image {
        background-image: url('images/banner/painters-banner.png');
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
