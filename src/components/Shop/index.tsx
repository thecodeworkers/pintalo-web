import { Hero, Products } from './elements'
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
    name: 'brands',
    filters: brands
  },
  {
    name: 'categories',
    filters: categories
  },
  {
    name: 'bases',
    filters: bases
  },
  {
    name: 'types',
    filters: types
  },
  {
    name: 'uses',
    filters: uses
  },
  {
    name: 'presentations',
    filters: presentations
  },
  {
    name: 'classes',
    filters: classes
  },
  {
    name: 'classes',
    filters: colors
  }
]

const Shop = ({ content }) => {
  return (
    <>
      <Hero
        title={content?.title}
        background={content?.banner?.mediaItemUrl}
      />
      <div className={styles._container}>
        <div className={styles._filtersContainer}>

        </div>
        <Products/>
      </div>
    </>
  )
}

export default Shop
