import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '@store/actions'
import { paginate } from '@utils'
import {
  CrossSymbol,
  CounterButton,
  Pagination
} from '@components'
import styles from './styles.module.scss'

const Items = ({ products, page, perPage, setPage, cart }) => {

  const dispatch = useDispatch()
  const calculateItems = (product, operator) => dispatch(updateQuantity(product, operator))
  const removeProduct = (item) => dispatch(removeItem(item))

  return (
    <>
      {
        paginate(products, page, perPage).map((item, index) => {
          const product = item?.variation?.node || item?.product?.node
          return (
            <div key={index}>
              <div className={styles._itemContainer}>
                <div className={styles._productCardContainer}>
                  <div className={styles._productCard}>
                    <div
                      className={styles._crossContainer}
                      onClick={() => removeProduct(item?.key)}
                    >
                      <CrossSymbol
                        width="2.4px"
                        height="15px"
                      />
                    </div>
                    <div className={styles._imageContainer}>
                      <img
                        src={product?.image?.mediaItemUrl}
                        alt="name"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles._descriptionContainer}>
                  <p>{product?.name}</p>
                  <p>Tamaño</p>
                  <p>{product?.description}</p>
                </div>
                <div className={styles._priceContainer}>
                  <p>Precio</p>
                  <p>{product.price}</p>
                </div>
                <div className={styles._quantityContainer}>
                  <div className={styles._quantitySubContainer}>
                    <p>Cantidad</p>
                    <input
                      type="text"
                      className={`${styles._inputQuantity}`}
                      value={item?.quantity}
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
                          calculateItems(item, 'reduce')
                        }}
                      />
                      <CounterButton
                        direction="_right"
                        size="2.2rem"
                        backgroundColor="#262833"
                        arrowColor="#FFFFFF"
                        arrowSize="3px"
                        arrowWidth="2px"
                        onPress={(plus: number) => { calculateItems(item, 'add') }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles._totalContainer}>
                  <p>Total</p>
                  <p>{item?.total}</p>
                </div>
                <div className={styles._totalsContainerMobile}>
                  <div className={styles._priceMobile}>
                    <div>
                      <p>Precio</p>
                      <p>{product?.price}</p>
                    </div>
                  </div>
                  <div className={styles._totalMobile}>
                    <div>
                      <p>Total</p>
                      <p>{item?.total}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles._separator}></div>
            </div>
          )
        })
      }
      <div className={styles._totalAmount}>
        <div className={styles._totalWord}>
          <p>Total</p>
        </div>
        <div className={styles._totalNumber}>
          <p>{cart.total}</p>
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
