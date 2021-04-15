import styles from './styles.module.scss'
import { Logo } from '../../../../../public/images/logos'

const Hero = ({ data }) => {
  return (
    <>
      <section className={`${styles._main} _image`}>
        <div className={styles._logo}>
            <Logo color='#000000' />
        </div>
      </section>

      <style jsx>{`
      ._image {
        background-image: url(${data.background.mediaItemUrl});
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 30vw;
        background-position: center; 
      }
    `}</style>
    </>
  )
}

export default Hero
