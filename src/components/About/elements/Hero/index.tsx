import styles from './styles.module.scss'
import { Logo } from '../../../../../public/images/logos'

const Hero = ({ data }) => {
  return (
    <>
      <section className={`${styles._main} ${styles._image}`}>
        <div className={styles._logo}>
          <Logo color='#000000' />
        </div>
      </section>

      <style jsx>{`
      .${styles._image} {
        background-image: url(${data.background.mediaItemUrl});
      }
    `}</style>
    </>
  )
}

export default Hero
