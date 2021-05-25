import styles from './styles.module.scss'

const Hero = () => {
  return (
    <>
      <section className={`${styles._main} ${styles._image}`}>
        <div>
          <h1>Inspírate</h1>
          <p>tipos de estilo de decoracion y colores que van bien con cada uno</p>
        </div>
      </section>

      <style jsx>{`
      .${styles._image} {
        background-image: url('images/banner/inspo-banner.png');
      }
    `}</style>
    </>
  )
}

export default Hero
