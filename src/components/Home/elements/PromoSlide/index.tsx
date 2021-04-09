import { useState, useEffect } from "react";
import { Stepper } from '@components'
import { SecondBanner, FirstBanner, ThirdBanner } from './elements'
import styles from './styles.module.scss'

const items = [
  { className: styles._show, id: '1', component: <FirstBanner /> },
  { className: styles._hidden, id: '2', component: <SecondBanner /> },
  { className: styles._hidden, id: '3', component: <ThirdBanner /> }
]

const PromoSlide = () => {

  const [currentIndex, setcurrentIndex] = useState(0);
  const [stepperIndex, setStepperIndex] = useState(0);
  let interval;

  useEffect(() => {
    changeImage(currentIndex, styles._show);

    return () => { clearTimeout(interval) }
  }, [currentIndex])

  const changeImage = (index, stylus) => {

    items.forEach((res, mapIndex) => { items[mapIndex].className = styles._hidden })
    items[index].className = stylus

   const stepperIndex = setStepperIndex(currentIndex+1)

    interval = setTimeout(() => {
      if (currentIndex < items.length - 1) return setcurrentIndex(currentIndex + 1)
      else setcurrentIndex(0)
    }, 4000);
  }

  return (
    <div className={styles._content}>
      <div className={styles._main}>
        {
          items.map((res, index) => {
            return (
              <div className={res.className} id={res.id} key={index}>
                {res.component}
              </div>
            )
          })
        }
      </div>
      <div className={styles._stepperContainer}>
        <div className={styles._stepper}>
        <Stepper currentStep={stepperIndex} length={items.length} />
        </div>

      </div>
    </div>
  )
}

export default PromoSlide
