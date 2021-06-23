import { setFilter } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

const brands = [
  'Pineco',
  'Alpha',
  'VP',
  'Reinco',
  'Manpica',
  'Cebra',
  'Butler tools',
  'Otro'
]

const categories = [
  'Arquitectonico',
  'Herramienta',
  'Industrial',
  'Madera',
  'Automotriz',
  'Otro'
]

const bases = [
  'Caucho',
  'Esmalte',
  'Fondo'
]

const types = [
  'Mate',
  'Masillas',
  'Satinado',
  'Impermeabilizantes',
  'Brillante',
  'Aditivos',
  'Texturizado',
  'Grafeado',
  'Tratamiento superficies'
]

const uses = [
  'Interior',
  'Exterior',
  'Interior-Exterior'
]

const presentations = [
  'Cuarto de galon',
  'Cunete',
  'Galon',
  'Paila'
]

const classes = [
  'A',
  'B',
  'C',
  'N/A'
]

const colors = [
  'Blanco',
  'Catalogo',
  'Negro',
  'Sistema de tinteo'
]

const options = [
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
  const filters = useSelector((state: any) => state.shop?.filters)
  const dispatch = useDispatch()

  const selectFilter = (e) => dispatch(setFilter(e.target.value))

  return (
    <div className={styles._filtersContainer}>
      <div className={styles._filtersPanel}>
        <div className={styles._filtersTitle}>
          <h1>Filtros</h1>
        </div>
        {
          options.map((option, index) => (
            <div key={index} className={styles._filtersOptionContainer}>
              <div className={styles._optionsTitle}>
                <h1>{option.name}</h1>
              </div>
              <div className={styles._optionsContainer}>
                {
                  option.filters.map((filter, index) => (
                    <div key={index} className={styles._options}>
                      <div className={styles._checkboxContainer}>
                        <input
                          type="checkbox"
                          className={styles._checkbox}
                          value={filter}
                          onChange={selectFilter}
                          checked={filters.some(f => f == filter) ? true : false}
                        />
                      </div>
                      <p>{filter}</p>
                    </div>
                  ))
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
