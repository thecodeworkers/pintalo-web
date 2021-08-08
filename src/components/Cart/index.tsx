import { GeneralButton, Pagination } from '@components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Items from './Items'
import styles from './styles.module.scss'

const perPage = 4

const CartPage = () => {
  const [page, setPage] = useState(1)
  const { items, cart } = useSelector((state: any) => state.cart)

  const router = useRouter()

  const navigation = route => router.push(route)

  return (
    <div className={styles._container}>
      <h1>Tu carrito</h1>
      <div className={styles._panelContainer}>
        <div className={styles._header}></div>
        {
          cart?.contents?.nodes?.length ? (
            <Items
              products={cart?.contents?.nodes}
              page={page}
              perPage={perPage}
              setPage={setPage}
              cart={cart}
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
          items.length ? (
            <Pagination
              currentPage={page}
              items={items}
              perPage={perPage}
              changePage={setPage}
            />
          ) : null
        }
      </div>
      <div className={styles._buttonsContainer}>
        <GeneralButton
          backgroundColor="#FDCA40"
          textColor="#262833"
          method={() => navigation('/shop')}
        >
          Volver a shop
        </GeneralButton>
        {
          items.length ? (
            <GeneralButton
              backgroundColor="#FDCA40"
              textColor="#262833"
            >
              Confirmar
            </GeneralButton>
          ) : null
        }
      </div>
    </div>
  )
}

export default CartPage
