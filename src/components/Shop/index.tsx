import { useDispatch, useSelector } from 'react-redux'
import { Hero, Products, Filters } from './elements'
import { setShowFilters } from '@store/actions'
import styles from './styles.module.scss'

const Shop = ({ content }) => {
  const { showFilters } = useSelector((state: any) => state.intermitence)
  const dispatch = useDispatch()

  return (
    <>
      <Hero
        title={content?.title}
        background={content?.banner?.mediaItemUrl}
      />
      <div
        className={
          showFilters
            ? styles._noInteractionSection
            : ''
        }
        onClick={() =>{
          if (showFilters) dispatch(setShowFilters(false))
        }}
      >
        <div className={
          showFilters
            ? styles._backgroundOpacity
            : ''
        }></div>
        <div className={styles._container} onClick={e => e.stopPropagation()}>
          <Filters />
          <Products />
        </div>
      </div>
    </>
  )
}

export default Shop
