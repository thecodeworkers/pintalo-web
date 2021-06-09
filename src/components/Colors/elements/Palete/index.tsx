import { useState } from 'react'
import { hexToRgb, determinateTextColor } from '@utils'
import { Pagination, GeneralButton } from '@components'
import styles from './styles.module.scss'

const paletes = [
  { color: '#7B8ECE', name: 'Blue' },
  { color: '#7BA5CE', name: 'Blue' },
  { color: '#7BBDCE', name: 'Blue' },
  { color: '#7BCBCE', name: 'Blue' },
  { color: '#7081BB', name: 'Blue' },
  { color: '#7299BF', name: 'Blue' },
  { color: '#73B1C1', name: 'Blue' },
  { color: '#70BBBE', name: 'Blue' },
  { color: '#5E6C9D', name: 'Blue' },
  { color: '#6485A5', name: 'Blue' },
  { color: '#5F919E', name: 'Blue' },
  { color: '#68A7AA', name: 'Blue' },
  { color: '#4F5B84', name: 'Blue' },
  { color: '#5B7894', name: 'Blue' },
  { color: '#56848F', name: 'Blue' },
  { color: '#568E91', name: 'Blue' },
]

const perPage = 16

const Palete = () => {
  const [page, setPage] = useState(1)

  return (
    <div className={styles._cardsContainer}>
      <div className={styles._cardsArea}>
        {
          paletes.map((palete, index) => {
            const color = palete.color

            return (
              <div key={index} className={styles._card}>
                <div className={styles._cartContainer}>
                  <img src="/images/icons/bx-cart.svg" alt={palete.name} />
                </div>
                <p className={styles._paleteName}>{palete.name}</p>

                <style jsx>{`
                  .${styles._card} {
                    ${
                      true ? (`
                        background: linear-gradient(0deg,
                          #E2D6E0  25%,
                          #CDCBD6  25%,
                          #CDCBD6  50%,
                          #D1D9E4  50%,
                          #D1D9E4  75%,
                          #E2E5F4  75%,
                          #E2E5F4  100%
                        );
                      `) : (
                        `background-color: ${color};`
                      )
                    }
                    color: ${determinateTextColor(hexToRgb(color))}
                  }
                `}</style>
              </div>
            )
          })
        }
      </div>
      <div className={styles._paginationContainer}>
        <GeneralButton
          backgroundColor={'#262833'}
          textColor={'#fff'}
          bold={false}
        >
          Regresar
        </GeneralButton>
        {
          paletes.length ? (
            <Pagination currentPage={page} items={paletes} perPage={perPage} changePage={setPage}/>
          ) : null
        }
        <GeneralButton
          backgroundColor={'#262833'}
          textColor={'#fff'}
          bold={false}
        >
          Ir a shop
        </GeneralButton>
      </div>
    </div>
  )
}

export default Palete
