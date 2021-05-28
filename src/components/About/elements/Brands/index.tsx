import { useState } from 'react'
import { paginate } from '@utils'
import { Card } from '@components'
import Pagination from '../../../Pagination'
import styles from './styles.module.scss'

const perPage = 9

const Brands = ({ data }) => {
  const [page, setPage] = useState(1)

  return (
    <>
      <section className="_main">
        <div className={styles._content}>
          <div className={styles._grid}>
            {
              paginate(data, page, perPage).map((item, index) => {
                return (
                  <div key={index} className={styles._cards}>
                    <Card list={false} title={item?.title} description={item?.description} image={item?.logo?.mediaItemUrl} />
                  </div>
                )
              })
            }
          </div>
          <div className="_paginationContainer">
            {
              data.length ? (
                <Pagination currentPage={page} items={data} perPage={perPage} changePage={setPage}/>
              ) : null
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Brands
