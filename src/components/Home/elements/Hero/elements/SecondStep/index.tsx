import { FC, useState } from 'react'
import { GeneralButton } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '@store/actions'
import styles from './styles.module.scss'

const SecondStep: FC<any> = () => {
  const [active, setActive] = useState(false)

  const slide = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const currentStep = slide.setColor.step

  const setState = (category) => {
    setActive(true)
    dispatch(setColor({ category: category, step: currentStep + 1 }))
  }

  const category = [
    { name: 'Arquitectónico' },
    { name: 'Industrial' },
    { name: 'Automotriz' },
    { name: 'Herramientas' },
    { name: 'Madera' },
    { name: 'Solventes' },
    { name: 'Mantenimiento bajo' },
    { name: 'Mantenimiento alto' },
  ]

  return (
    <div className={styles._heroContainer}>
      <div className={styles._container}>
        <p className={styles._title}>Por categoria</p>
        <div className={styles._buttonContainer}>
          {
            category.map((res, index) => {
              return (
                <div className={styles._content} key={index}>
                  <GeneralButton backgroundColor={active ? '#FDCA40' : '#262833'} textColor={'#fff'} bold={true} method={() => setState(res.name)} large="2.2rem">
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
