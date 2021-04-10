import styles from './styles.module.scss'

const Blog = () => {
  return (
    <section className='_main'>
      <div className={styles._content} >
        <h2>Inspirate y comienza a recubrir, revestir y remodelar</h2>

        <div className={styles._blogParent}>
          {
            Array.from(Array(9).keys()).map((item, index) => {
              return (
                <div className={styles._card} key={index}>
                  <div className={styles._header}>
                    <div className={styles._dotsParent}>
                      <div className={styles._dot}></div>
                      <div className={styles._dot}></div>
                      <div className={styles._dot}></div>
                    </div>
                  </div>

                  <div className={styles._miniHero}>
                    <div className={styles._textParent}>
                      <div className={styles._textChild} >
                        <p> Como elegir los colores de tus paredes</p>
                      </div>
                    </div>
                    <div className={styles._opacity}></div>
                  </div>

                  <div className={styles._article}>
                    <div className={styles._articleChild}>
                      <h3>¿Adentro o afuera?</h3>
                      <p>Las pinturas en exterior se ven más luminosas de lo que parecen en las paletas de colores. Elige un color ligeramente más oscuro al que te gusta.</p>
                      <p>Fuente: <a> link </a></p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
