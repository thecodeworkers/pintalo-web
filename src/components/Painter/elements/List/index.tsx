import styles from './styles.module.scss'
import { Card } from '@components'

const List = () => {
  return (
    <section className='_main'>
      <div className={styles._content}>
        <h2>Conoce a los profesionales de confianza que harán de tus espacios una obra de arte.</h2>
        <div className={styles._grid}>
          {
            Array.from(Array(9).keys()).map((item, index) => {
              return (
                <div key={index}>
                  <Card />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default List
