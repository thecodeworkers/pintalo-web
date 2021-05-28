import { useState } from 'react'
import { paginate } from '@utils'
import { Card } from '@components'
import styles from './styles.module.scss'
import Pagination from '../../../Pagination'

const perPage = 9

const List = ({ data }) => {
  const [page, setPage] = useState(1)
  const painters = (data?.painters || [])

  return (
    <section className='_main'>
      <div className={styles._content}>
        <h2> { data?.title } </h2>
        <div className={styles._grid}>
          {
            paginate(painters, page, perPage).map((item, index) => {
              return (
                <div key={index}>
                  <Card painter={item} image={item?.image?.mediaItemUrl}/>
                </div>
              )
            })
          }
        </div>
        <div className="_paginationContainer">
          {
            painters.length ? (
              <Pagination currentPage={page} items={painters} perPage={perPage} changePage={setPage}/>
            ) : null
          }
        </div>
      </div>
    </section>
  )
}

export default List
