import { useState } from "react";
import { useRouter } from 'next/router'
import { GeneralButton, Stepper } from '@components'
import { SecondBanner, FirstBanner, ThirdBanner } from './elements'
import styles from './styles.module.scss'

const PromoSlide = () => {

  const router = useRouter()
  const slideBox = [
    {
      className: styles._slides,
      id: '1'
    },
    {
      className: styles._slidestwo,
      id: '2'
    },
    {
      className:  styles._slidesthree,
      id: '3'
    }
  ]

  const slideBanner = (element, stylin) => {
    let showedSlide = element+1
    const pepitocomeback = document.getElementById(slideBox[element].id)

    slideBox.map((item, index) => {

      if(showedSlide == Number(item.id)){
        pepitocomeback.className = stylin
        return
      }
       if(showedSlide != Number(item.id)){
        slideBox[1].className = styles._slides
      }

      slideBox[index].className = styles._slides
      console.log(slideBox);
    });

  }

  return (
    <>

      <ThirdBanner />
     {/*    <div className={styles._slideContainer}>
          {
            slideBox.map(res => {
              console.log(res.className);

              return (
                <div id={res.id} className={res.className}>

                </div>)
            })
          }
          <p onClick={() => slideBanner(0, styles._showslidetwo)} >izquierda</p>
          <p onClick={() => slideBanner(2, styles._showslide)}> derecha</p>
        </div> */}


    </>
  )
}

export default PromoSlide
