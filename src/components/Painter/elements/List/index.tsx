import styles from './styles.module.scss'
import { Card } from '@components'

const List = ({ data }) => {
  return (
    <section className='_main'>
      <div className={styles._content}>
        <h2> { data?.title } </h2>
        <div className={styles._grid}>
          {
            data?.painters?.map((item, index) => {
              return (
                <div key={index}>
                  <Card painter={item} image={item?.image?.mediaItemUrl}/>
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
