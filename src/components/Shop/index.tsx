import { Hero, Products, Filters } from './elements'
import styles from './styles.module.scss'

const showFilters = false

const Shop = ({ content }) => {
  return (
    <>
      <Hero
        title={content?.title}
        background={content?.banner?.mediaItemUrl}
      />
      <div className={
        showFilters
          ? styles._noInteractionSection
          : ''
      }>
        <div className={
          showFilters
            ? styles._backgroundOpacity
            : ''
        }></div>
        <div className={styles._container}>
          <Filters />
          <Products />
        </div>
      </div>
    </>
  )
}

export default Shop
