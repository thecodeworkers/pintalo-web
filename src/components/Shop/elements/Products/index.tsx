import { useState } from 'react'
import { useRouter } from 'next/router'
import { GeneralButton, Pagination } from '@components'
import { paginate } from '@utils'
import Filter from './Filter'
import styles from './styles.module.scss'

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

const perPage = 12

const Products = () => {
  const [page, setPage] = useState(1)
  const router = useRouter()

  const navigation = (route: string) => router.push(route)

  return (
    <div className={styles._productsContainer}>
      <Filter quantity={products.length} />

      <div className={styles._cardsArea}>
        {
          paginate(products, page, perPage).map((product, index) => (
            <div key={index} className={styles._productCard}>
              <div className={styles._cartContainer}>
                <div className={styles._cart}>
                  <img src="/images/icons/bx-cart.svg" alt="cart" />
                </div>
              </div>
              <div
                className={styles._productImageContainer}
                onClick={() => navigation('/color/cHJvZHVjdDoxOTc=')}
              >
                <img src={product.productImg} alt={product.name} width="100%" height="90%" />
              </div>
              <div className={styles._informationContainer}>
                <div className={styles._titleContainer}>
                  <h1>{product.name}</h1>
                </div>
                <div className={styles._productDetail}>
                  <div className={styles._detailsContainer}>
                    <p>{product.color}</p>
                    <p>{`${product.quantity} unidades`}</p>
                    <p>{product.type}</p>
                  </div>
                  <div className={styles._buttonContainer}>
                    <GeneralButton
                      adjustWidth
                      backgroundColor="#FDCA40"
                      textColor="#262833"
                    >
                      <p>Comprar</p>
                    </GeneralButton>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className={styles._paginationContainer}>
        {
          products.length && (
            <Pagination currentPage={page} items={products} perPage={perPage} changePage={setPage}/>
          )
        }
        {
          true && (
            <div className={styles._bigButton}>
              <GeneralButton
                backgroundColor="#262833"
                textColor="#FFFFFF"
              >
                Finalizar compra
              </GeneralButton>
            </div>
          )
        }
      </div>
      {
        true && (
          <div className={styles._bigButtonMobile}>
            <GeneralButton
              backgroundColor="#262833"
              textColor="#FFFFFF"
              adjustWidth
            >
              Finalizar compra
            </GeneralButton>
          </div>
        )
      }
    </div>
  )
}

export default Products
