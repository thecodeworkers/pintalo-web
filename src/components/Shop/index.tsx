import { Hero } from './elements'
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

const products = [
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
  {
    name: 'Nombre/Producto',
    color: 'Azul Rey',
    quantity: 3,
    type: 'Satinado',
    productImg: 'https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png'
  },
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
        <div className={styles._productsContainer}>

        </div>
      </div>
    </>
  )
}

export default Shop
