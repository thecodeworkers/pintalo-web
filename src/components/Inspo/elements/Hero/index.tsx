import styles from './styles.module.scss'

const Hero = ({ title, subtitle, bannerImage }) => {
  return (
    <>
      <section className={`${styles._main} ${styles._image}`}>
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      <style jsx>{`
      .${styles._image} {
        background-image: url(${bannerImage});
      }
    `}</style>
    </>
  )
}

export default Hero
