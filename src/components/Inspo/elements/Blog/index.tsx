import { useState } from 'react'
import { paginate } from '@utils'
import styles from './styles.module.scss'
import Pagination from '../../../Pagination'

const perPage = 9

const Blog = ({ title, posts }) => {
  const [page, setPage] = useState(1)

  return (
    <section className='_main'>
      <div className={styles._content} >
        <h2>{title}</h2>

        <div className={styles._blogParent}>
          {
            paginate(posts, page, perPage).map((post, index) => {
              let mediaItemUrl = post?.inspo_entry?.image?.mediaItemUrl
              mediaItemUrl = mediaItemUrl ? mediaItemUrl : ''

              return (
                <div className={styles._card} key={index}>
                  <div className={styles._header}>
                    <div className={styles._dotsParent}>
                      <div className={styles._dot}></div>
                      <div className={styles._dot}></div>
                      <div className={styles._dot}></div>
                    </div>
                  </div>

                  <div className={styles._miniHero}>
                    <div className={styles._textParent}>
                      <div className={styles._textChild} >
                        <p>{post?.inspo_entry?.title}</p>
                      </div>
                    </div>
                    <div className={styles._opacity}></div>
                  </div>
                  <style jsx>{`
                    .${styles._miniHero} {
                      background-image: url(${mediaItemUrl});
                    }
                  `}</style>

                  <div className={styles._article}>
                    <div className={styles._articleChild}>
                      <h3>{post?.inspo_entry?.subtitle}</h3>
                      <p>{post?.inspo_entry?.content}</p>
                      <p>Fuente: <a rel="noopener" target="_blank" href={post?.inspo_entry?.link}> link </a></p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className={styles._paginationContainer}>
          {
            posts.length ? (
              <Pagination currentPage={page} items={posts} perPage={perPage} changePage={setPage}/>
            ) : null
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
