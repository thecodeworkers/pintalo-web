import { CrossSymbol } from '@components'
import { search, setFilter, setShowFilters } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

const FilterLabel = ({ name, type }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles._filterLabel}>
      <p>{name}</p>
      <div onClick={() => dispatch(setFilter(name, type))}><CrossSymbol /></div>
    </div>
  )
}

const Filter = ({ quantity }) => {
  const filters = useSelector((state: any) => state.shop?.filters)
  const dispatch = useDispatch()

  const searchProducts = e => dispatch(search(e.target.value))
  return (
    <>
      <div className={styles._titleContainer}>
        <h1>{quantity} productos que puedes comprar</h1>
      </div>
      <div className={styles._inputContainer}>
        <input
          type="text"
          className={styles._input}
          onChange={searchProducts}
        />
        <div className={styles._iconParent}>
          <img src="/images/icons/bx-search.svg" alt="search" width="18px" height="18px" />
        </div>
      </div>
      <div className={styles._filterLabelContainer}>
        {
          filters['categories'].map((filter, index) => (
            <FilterLabel key={index} name={filter} type={'categories'} />
          ))
        }
        {
          filters['attributes'].map((filter, index) => (
            <FilterLabel key={index} name={filter} type={'attributes'} />
          ))
        }
      </div>
      <div className={styles._filterButtonContainer}>
        <div
          className={styles._filterButton}
          onClick={() => dispatch(setShowFilters(true))}
        >
          <div className={styles._filterBadge}>
            <p>filtros</p>
            {
              filters.length ? (
                <div className={styles._badge}>
                  {filters.length}
                </div>
              ) : null
            }
          </div>
          <img src="/images/icons/bx-abacus.svg" alt="search" width="18px" height="18px" />
        </div>
      </div>
    </>
  )
}

export default Filter
