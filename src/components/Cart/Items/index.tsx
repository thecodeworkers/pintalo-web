import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setItem } from '@store/actions'
import { paginate } from '@utils'
import {
  CrossSymbol,
  CounterButton,
  Pagination
} from '@components'
import styles from './styles.module.scss'

const Items = ({ products, page, perPage, setPage }) => {
  const dispatch = useDispatch()

  const calculateItems = (product, operator) => {
    const result = products.map(pr => {
      if (pr.id == product.id) {
        pr.quantitySelected = pr.quantitySelected + operator
      }

      return pr
    })

    dispatch(setItem(result))
  }

  return (
    <>
      {
        paginate(products, page, perPage).map((product, index) => (
          <div key={index}>
            <div className={styles._itemContainer}>
              <div className={styles._productCardContainer}>
                <div className={styles._productCard}>
                  <div className={styles._crossContainer}>
                    <CrossSymbol
                      width="2.4px"
                      height="15px"
                    />
                  </div>
                  <div className={styles._imageContainer}>
                    <img
                      src="https://pintalo-dev-admin.thecodeworkers.com/wp-content/uploads/2021/04/Paint-Packaging-Mockup.png"
                      alt="name"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
              <div className={styles._descriptionContainer}>
                <p>Nombre/Producto</p>
                <p>Tamaño</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
              <div className={styles._priceContainer}>
                <p>Precio</p>
                <p>10$</p>
              </div>
              <div className={styles._quantityContainer}>
                <div className={styles._quantitySubContainer}>
                  <p>Cantidad</p>
                  <input
                    type="text"
                    className={`${styles._inputQuantity}`}
                    value={product.quantitySelected}
                    disabled
                  />
                  <div className={styles._arrowContainer}>
                    <CounterButton
                      direction="_left"
                      size="2.2rem"
                      backgroundColor="#262833"
                      arrowColor="#FFFFFF"
                      arrowSize="3px"
                      arrowWidth="2px"
                      onPress={(minus: number) => {
                        if (product.quantitySelected > 1)
                          calculateItems(product, minus)
                      }}
                    />
                    <CounterButton
                      direction="_right"
                      size="2.2rem"
                      backgroundColor="#262833"
                      arrowColor="#FFFFFF"
                      arrowSize="3px"
                      arrowWidth="2px"
                      onPress={(plus: number) => {
                        if (product.quantitySelected < product.stockQuantity)
                          calculateItems(product, plus)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles._totalContainer}>
                <p>Total</p>
                <p>1000$</p>
              </div>
              <div className={styles._totalsContainerMobile}>
                <div className={styles._priceMobile}>
                  <div>
                    <p>Precio</p>
                    <p>$10000</p>
                  </div>
                </div>
                <div className={styles._totalMobile}>
                  <div>
                    <p>Precio</p>
                    <p>$10000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles._separator}></div>
          </div>
        ))
      }
      <div className={styles._totalAmount}>
        <div className={styles._totalWord}>
          <p>Total</p>
        </div>
        <div className={styles._totalNumber}>
          <p>$1,000.00</p>
        </div>
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
    </>
  )
}

export default memo(Items)
