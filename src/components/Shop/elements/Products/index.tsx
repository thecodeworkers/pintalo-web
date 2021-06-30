import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { GeneralButton, Pagination } from '@components'
import { changePage } from '@store/actions'
import { paginate } from '@utils'
import Filter from './Filter'
import styles from './styles.module.scss'

const perPage = 12

const Products = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    product: { products },
    shop: { page }
  } = useSelector((state: any) => state)

  const navigation = (route: string) => router.push(route)

  return (
    <div className={styles._productsContainer}>
      <Filter quantity={(products || []).length} />

      <div className={styles._cardsArea}>
        {
          paginate((products || []), page, perPage).map((product, index) => (
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
                      method={() => navigation('/color/cHJvZHVjdDoxOTc=')}
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
          (products || []).length ? (
            <Pagination
              currentPage={page}
              items={products}
              perPage={perPage}
              changePage={page => dispatch(changePage(page))}
            />
          ) : null
        }
        {
          true && (
            <div className={styles._bigButton}>
              <GeneralButton
                backgroundColor="#262833"
                textColor="#FFFFFF"
                method={() => navigation('/cart')}
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
              method={() => navigation('/cart')}
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
