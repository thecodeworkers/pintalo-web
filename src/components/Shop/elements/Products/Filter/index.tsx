import { CrossSymbol } from '@components'
import { removeFilter } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

const FilterLabel = ({ name, index }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles._filterLabel}>
      <p>{name}</p>
      <div onClick={() => dispatch(removeFilter(index))}><CrossSymbol /></div>
    </div>
  )
}

const Filter = ({ quantity }) => {
  const filters = useSelector((state: any) => state.shop?.filters)

  return (
    <>
      <div className={styles._titleContainer}>
        <h1>{quantity} productos que puedes comprar</h1>
      </div>
      <div className={styles._inputContainer}>
        <input
          type="text"
          className={styles._input}
        />
        <div className={styles._iconParent}>
          <img src="/images/icons/bx-search.svg" alt="search" width="18px" height="18px" />
        </div>
      </div>
      <div className={styles._filterLabelContainer}>
        {
          filters.map((filter, index) => (
            <FilterLabel key={index} index={index} name={filter} />
          ))
        }
      </div>
      <div className={styles._filterButtonContainer}>
        <div className={styles._filterButton}>
          <div className={styles._filterBadge}>
            <p>filtros</p>
            <div className={styles._badge}>
              1
            </div>
          </div>
          <img src="/images/icons/bx-abacus.svg" alt="search" width="18px" height="18px" />
        </div>
      </div>
    </>
  )
}

export default Filter
