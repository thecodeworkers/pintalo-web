import { Hero, Products, Filters } from './elements'
import styles from './styles.module.scss'

const Shop = ({ content }) => {
  return (
    <>
      <Hero
        title={content?.title}
        background={content?.banner?.mediaItemUrl}
      />
      <div className={styles._container}>
        <Filters />
        <Products />
      </div>
    </>
  )
}

export default Shop
