import { GeneralButton, Pagination } from '@components'
import { useState } from 'react'
import Items from './Items'
import styles from './styles.module.scss'

const products = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

const perPage = 4

const CartPage = () => {
  const [page, setPage] = useState(1)

  return (
    <div className={styles._container}>
      <h1>Tu carrito</h1>
      <div className={styles._panelContainer}>
        <div className={styles._header}></div>
        {
          products.length ? (
            <Items
              products={products}
              page={page}
              perPage={perPage}
              setPage={setPage}
            />
          ) : (
            <div className={styles._notFound}>
              <h1>Aun no hay productos agregados</h1>
            </div>
          )
        }
      </div>
      <div className={styles._paginationContainer}>
        {
          products.length && (
            <Pagination
              currentPage={page}
              items={products}
              perPage={perPage}
              changePage={setPage}
            />
          )
        }
      </div>
      <div className={styles._buttonsContainer}>
        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
        >
          Volver a shop
        </GeneralButton>
        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
        >
          Confirmar
        </GeneralButton>
      </div>
    </div>
  )
}

export default CartPage
