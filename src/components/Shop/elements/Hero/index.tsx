import styles from './styles.module.scss'

const Hero = ({ title, background }) => (
  <>
    <div className={`${styles._hero} ${styles._container}`}>
      <h1>{title}</h1>
    </div>

    <style jsx>{`
      .${styles._hero} {
        background-image: url(${background});
      }
    `}</style>
  </>
)

export default Hero
