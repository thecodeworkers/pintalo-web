import { useState } from 'react'
import {
  GeneralButton,
  CrossSymbol,
  CounterButton,
  Pagination
} from '@components'
import styles from './styles.module.scss'

const products = [{}, {}, {}, {}]
const perPage = 4

const CartPage = () => {
  const [page, setPage] = useState(1)

  return (
    <div className={styles._container}>
      <h1>Tu carrito</h1>
      <div className={styles._panelContainer}>
        <div className={styles._header}></div>
        {
          products.map((_, index) => (
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
                  <p>Cantidad</p>
                  <input type="text" className={`${styles._inputQuantity}`} value={0} disabled />
                  <div className={styles._arrowContainer}>
                    <CounterButton
                      direction="_left"
                      size="2rem"
                      backgroundColor="#262833"
                      arrowColor="#FFFFFF"
                      arrowSize="3px"
                      arrowWidth="2px"
                      onPress={(minus: number) => {

                      }}
                    />
                    <CounterButton
                      direction="_right"
                      size="2rem"
                      backgroundColor="#262833"
                      arrowColor="#FFFFFF"
                      arrowSize="3px"
                      arrowWidth="2px"
                      onPress={(plus: number) => {

                      }}
                    />
                  </div>
                </div>
                <div className={styles._totalContainer}>
                  <p>Total</p>
                  <p>1000$</p>
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
