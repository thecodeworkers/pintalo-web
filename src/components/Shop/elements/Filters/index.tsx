import { setFilter, setShowFilters } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CrossSymbol } from '@components'
import styles from './styles.module.scss'


const options = ({ brands, categories, bases, types, uses, presentations, classes, colors }) => [
  {
    name: 'Brands',
    filters: brands
  },
  {
    name: 'Categories',
    filters: categories
  },
  {
    name: 'Bases',
    filters: bases
  },
  {
    name: 'Types',
    filters: types
  },
  {
    name: 'Uses',
    filters: uses
  },
  {
    name: 'Presentations',
    filters: presentations
  },
  {
    name: 'Classes',
    filters: classes
  },
  {
    name: 'Colors',
    filters: colors
  }
]

const Filters = () => {
  const { shop: { filters }, product: { attributes = {}, categories }, intermitence: { showFilters } } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  const selectFilter = (e) => {
    const id = e.currentTarget.id.split('.')[0]
    dispatch(setFilter(e.target.value, id))
  }

  const data = options({ ...attributes, categories: categories })

  return (
    <div className={
      `${styles._filtersContainer} ${showFilters
        ? styles._filtersContainerMobile
        : ''
      }`
    }>
      <div className={
        `${styles._filtersPanel} ${showFilters
          ? styles._filtersPanelMobile
          : ''
        }`
      }>
        <div className={styles._filtersTitle}>
          <h1>Filtros</h1>
          <div className={styles._crossButton}
            onClick={() => dispatch(setShowFilters(false))}
          >
            <CrossSymbol backgroundColor="#FFFFFF" />
          </div>
        </div>
        {
          data.map((option, index) => (
            <div key={index} className={styles._filtersOptionContainer}>
              <div className={styles._optionsTitle}>
                <h1>{option.name}</h1>
              </div>
              <div className={styles._optionsContainer}>
                {
                  option.filters?.map((filter, fIndex) => {
                    const type = (option.name === 'Categories') ? 'categories' : `attributes`
                    return (
                      <div key={fIndex} className={styles._options}>
                        <div className={styles._checkboxContainer}>
                          <input
                            type="checkbox"
                            className={styles._checkbox}
                            value={filter?.name}
                            id={type + '.' + fIndex}
                            onChange={selectFilter}
                            checked={filters[type]?.some(f => f == filter?.name) ? true : false}
                          />
                        </div>
                        <p>{filter?.name}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Filters
