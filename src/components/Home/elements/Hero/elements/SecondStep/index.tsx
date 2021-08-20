import { FC, useState } from 'react'
import { GeneralButton } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '@store/actions'
import styles from './styles.module.scss'

const SecondStep = ({ data }) => {
  const [active, setActive] = useState(false)

  const { setColor: { step }, product: { categories } } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const currentStep = step

  const setState = (category) => {
    setActive(true)
    dispatch(setColor({ category: category, step: currentStep + 1 }))
  }
  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>Por categoría</p>
        <div className={styles._buttonContainer}>
          {
            categories.map((res, index) => {
              return (
                <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={active ? '#FDCA40' : '#262833'} textColor={'#fff'} method={() => setState(res.slug)} large="2.2rem" adjustWidth>
                    <p className={styles._buttonText}>{res.name}</p>
                  </GeneralButton>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SecondStep
