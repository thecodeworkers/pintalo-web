import styles from './styles.module.scss'

const Hero = () => {
  return (
    <>
      <section className={`${styles._main} _image`}>
        <div>
          <h1>Inspírate</h1>
          <p>tipos de estilo de decoracion y colores que van bien con cada uno</p>
        </div>
      </section>

      <style jsx>{`
      ._image {
        background-image: url('images/banner/inspo-banner.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width:100%;
        height: 30vw;
      }
    `}</style>
    </>
  )
}

export default Hero
