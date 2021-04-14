import styles from './styles.module.scss'
import { Logo } from '../../../../../public/images/logos'
import { Card } from '@components'

const Brands = ({ data }) => {
    return (
    <>
      <section className={styles._main}>
        {
          data?.map((item, index) => {
            return (
              <div key={index} className={styles._cards}>
                <Card list={false} title={item.title} description={item.description} image={item.logo.mediaItemUrl} />
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default Brands
